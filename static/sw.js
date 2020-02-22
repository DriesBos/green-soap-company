importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04b1ea1db920fd234bfc.js",
    "revision": "f5719cd3aeb3a6898fb76722a9576a11"
  },
  {
    "url": "/_nuxt/1b88d6ec39cedefa64b3.js",
    "revision": "1a7aa9dcdda24ec27443581ecd3a8ca0"
  },
  {
    "url": "/_nuxt/259fe3401aa8e8d70843.js",
    "revision": "f73cb099430fb96cd38382542330a9ca"
  },
  {
    "url": "/_nuxt/3fa0a4ed1249be8c329f.js",
    "revision": "47f007c1dd3ef47bff3eaaf36a793991"
  },
  {
    "url": "/_nuxt/5e20af8c1d0595b1bce5.js",
    "revision": "8eff9c14c65c0707d3e408c5532c31ab"
  },
  {
    "url": "/_nuxt/9081ece575850d7bff3c.js",
    "revision": "9ead29a0f0e4c1352a5d1b369d50cfce"
  },
  {
    "url": "/_nuxt/94686496eff9a2dfeaaf.js",
    "revision": "fa0718b70df43089f812d10e7fb6755d"
  },
  {
    "url": "/_nuxt/993c522d800eab1a4db3.js",
    "revision": "ee3f9a16c34aea414d936407d69563dd"
  },
  {
    "url": "/_nuxt/a249a9292a74278cf5a4.js",
    "revision": "ca2ab0d420927534ab031d176a74d604"
  },
  {
    "url": "/_nuxt/ae95c2776f29dbfa132e.js",
    "revision": "1b63cab80dd80b795f9626ce88ad87fb"
  },
  {
    "url": "/_nuxt/c6b8bed91991f6886b82.js",
    "revision": "f1ef38aff6e621f21525961428e27e73"
  },
  {
    "url": "/_nuxt/c73a127cde8b0263a41d.js",
    "revision": "a7ce238959e49695b555acca550f3eda"
  },
  {
    "url": "/_nuxt/f691dedac65dc677110a.js",
    "revision": "f1428d27a04a0ccd8fdafd844554358b"
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
