import { useState, useEffect } from 'react';
import { CONFIG } from '../config';

export interface ReleaseInfo {
  version: string;
  date: string;
  tag: string | null;
  notes: string;
}

const CACHE_KEY = 'sf_releases_list';
const CACHE_TIME_KEY = 'sf_releases_list_time';
const SHORT_CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes fresh window

const FALLBACK_RELEASES: ReleaseInfo[] = [
  { version: '0.0.4', date: 'Jul 13, 2026', tag: 'Latest', notes: 'Initial public release of StreamFlow.' }
];

export function useReleases() {
  const [releases, setReleases] = useState<ReleaseInfo[]>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
    return FALLBACK_RELEASES;
  });

  useEffect(() => {
    async function fetchReleases() {
      // 1. Check local storage cache freshness
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        
        if (cachedData && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          // If the cached version is very fresh, do not trigger fetch
          if (age < SHORT_CACHE_DURATION_MS) {
            setReleases(JSON.parse(cachedData));
            return;
          }
        }
      } catch (e) {
        // Ignore
      }

      // 2. Fetch from GitHub API
      try {
        const response = await fetch(
          `https://api.github.com/repos/${CONFIG.githubRepo}/releases`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.slice(0, 3).map((item: any, index: number) => {
            // Format published date
            let formattedDate = 'Recent';
            try {
              if (item.published_at) {
                const dateObj = new Date(item.published_at);
                formattedDate = dateObj.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                });
              }
            } catch (e) {
              // Stay with default
            }

            // Extract a clean snippet from release description body
            let notes = item.body || '';
            if (notes) {
              // Take the first line and clean up markdown prefix characters
              notes = notes.split('\n')[0].replace(/^[#\-*>\s]+/, '').trim();
              if (notes.length > 120) {
                notes = notes.slice(0, 117) + '...';
              }
            }
            if (!notes) {
              notes = item.name || `Release ${item.tag_name}`;
            }

            return {
              version: item.tag_name ? item.tag_name.replace(/^v/, '') : '',
              date: formattedDate,
              tag: index === 0 ? 'Latest' : null,
              notes: notes,
            };
          });

          setReleases(mapped);

          // 3. Cache the result
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(mapped));
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
          } catch (e) {
            // Ignore storage write issues
          }
        }
      } catch (err) {
        console.error('Failed to fetch releases list from GitHub:', err);
      }
    }

    fetchReleases();
  }, []);

  return releases;
}
