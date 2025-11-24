import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  return new Response(
    `// This service worker is intentionally left empty.
// It's a workaround to prevent 404 errors from stale service workers
// registered by other applications on the same port.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
`,
    {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for a long time
      },
    },
  );
};
