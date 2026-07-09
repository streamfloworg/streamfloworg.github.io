import { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const CACHE_KEY = 'sf_latest_release';
const CACHE_TIME_KEY = 'sf_latest_release_time';
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour caching

export function useLatestRelease() {
  const [version, setVersion] = useState<string>(() => CONFIG.fallbackVersion.replace(/^v/, ''));

  useEffect(() => {
    async function fetchVersion() {
      // 1. Check local storage cache
      try {
        const cachedVersion = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        
        if (cachedVersion && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          if (age < CACHE_DURATION_MS) {
            setVersion(cachedVersion.replace(/^v/, ''));
            return;
          }
        }
      } catch (e) {
        console.warn('LocalStorage not available:', e);
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
        // Stays on fallbackVersion/previously cached version
      }
    }

    fetchVersion();
  }, []);

  return version;
}
