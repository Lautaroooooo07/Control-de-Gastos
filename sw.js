// Guarda la app en el celular para que abra rápido aunque haya mala señal.
// Los datos (gastos e ingresos) siempre se piden a la planilla por internet.
const CACHE = 'gastos-v1';
const ARCHIVOS = [
  './', 'index.html', 'config.js', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/lucide@0.469.0/dist/umd/lucide.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function guardar(req, res) {
  if (res && res.ok) {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(req, copia));
  }
  return res;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const propio = url.origin === self.location.origin;
  // Los pedidos a Google (los datos) no pasan por acá.
  if (!propio && url.hostname !== 'cdn.jsdelivr.net') return;
  if (propio) {
    // Primero internet, así siempre llega la última versión; sin señal, lo guardado.
    e.respondWith(
      fetch(req).then(res => guardar(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => guardar(req, res))));
  }
});
