self.addEventListener("install", (event) => {
  console.log("IngeBot service worker instalado.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});