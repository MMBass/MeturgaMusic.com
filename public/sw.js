const CACHE_NAME = 'meturga-cache-v1';

self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  //  POST reqs can't be in cache
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      try {
        // try to get updated version
        const response = await fetch(event.request);
        
        // save it to cache
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());
        
        return response;
      } catch (error) {
        // if no network - use the cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;
        
        throw error;
      }
    })()
  );
});