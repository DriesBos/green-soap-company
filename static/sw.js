importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/184848ffcf790281c4f8.js",
    "revision": "9a96d6e3e15196edfa14ee68225223ad"
  },
  {
    "url": "/_nuxt/1e7dbea92445edf3a3cf.js",
    "revision": "57aa9f0884bfa58e32097132aa72110c"
  },
  {
    "url": "/_nuxt/5a7a54cb060377463916.js",
    "revision": "1f3046aee04a73c3a9f4cf620dd25c4c"
  },
  {
    "url": "/_nuxt/5abfe7e9f74a5f62b7c9.js",
    "revision": "20b4a20ff69f17d15bb6c03e7bef9084"
  },
  {
    "url": "/_nuxt/8b4c7b10f4604725c825.js",
    "revision": "02c799add0cab85fe32fffa9f9f9c63a"
  },
  {
    "url": "/_nuxt/9062bd4c8b2f8e5c05af.js",
    "revision": "ade8cc94de410265366877add6f96fdf"
  },
  {
    "url": "/_nuxt/9d48347f340ca3eab71b.js",
    "revision": "cb8051954833a22c9ff3f820afaa2067"
  },
  {
    "url": "/_nuxt/b86bff935e52a2840a31.js",
    "revision": "6f5caa13da7ed4e2b79b7d0e7040b1a2"
  },
  {
    "url": "/_nuxt/d04bdbd996765f2b2bae.js",
    "revision": "029e4a728efe6054dee73db24edcf2a2"
  },
  {
    "url": "/_nuxt/da085e709fad011cbe0a.js",
    "revision": "24ac55ba69d497390f7ad3cb720da673"
  },
  {
    "url": "/_nuxt/dc987d3b1c4281d1e76c.js",
    "revision": "7ece0934d6a0e72018d7e8935d273476"
  },
  {
    "url": "/_nuxt/e465e43c19f27da8c426.js",
    "revision": "568feae6bbd4876122d9e00c151c1907"
  },
  {
    "url": "/_nuxt/fcba3c93a2b27c8f551b.js",
    "revision": "341c84634602ae7004f06e461c52b5ab"
  }
], {
  "cacheId": "nuxt-storyblok-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
