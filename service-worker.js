const staticUnicorn = "uni-site";
const assets = [
	"/",
	"/index.html",
	"/icon-192x192.png",
	"/icon-256x256.png",
	"/icon-384x384.png",
	"/icon-512x512.png",
];

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticUnicorn).then(cache => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request);
		})
	);
});
