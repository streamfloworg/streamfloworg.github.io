import { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const CACHE_KEY = 'sf_latest_release';
const CACHE_TIME_KEY = 'sf_latest_release_time';
const SHORT_CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes fresh window

export function useLatestRelease() {
  const [version, setVersion] = useState<string>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        return cached.replace(/^v/, '');
      }
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
    return CONFIG.fallbackVersion.replace(/^v/, '');
  });

  useEffect(() => {
    async function fetchVersion() {
      // 1. Check local storage cache freshness
      try {
        const cachedVersion = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        
        if (cachedVersion && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          // If the cached version is very fresh (less than 5 minutes), do not trigger fetch
          if (age < SHORT_CACHE_DURATION_MS) {
            setVersion(cachedVersion.replace(/^v/, ''));
            return;
          }
        }
      } catch (e) {
        // Ignore
      }

      // 2. Fetch from GitHub API
      try {
        const response = await fetch(
          `https://api.github.com/repos/${CONFIG.githubRepo}/releases/latest`,
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
        const latestTag = data.tag_name;
        
        if (latestTag) {
          const cleanTag = latestTag.replace(/^v/, '');
          setVersion(cleanTag);
          
          // 3. Cache the result
          try {
            localStorage.setItem(CACHE_KEY, cleanTag);
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
          } catch (e) {
            // Ignore storage write issues
          }
        }
      } catch (err) {
        console.error('Failed to fetch latest release version from GitHub:', err);
      }
    }

    fetchVersion();
  }, []);

  return version;
}
