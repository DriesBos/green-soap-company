importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/006712de516090710ad8.js",
    "revision": "93a66ff3e0d8a1f936b2a84a6d748033"
  },
  {
    "url": "/_nuxt/12d062c465242129db77.js",
    "revision": "997b9d261a08f1a4c6291b76c8b73847"
  },
  {
    "url": "/_nuxt/5980e6dd4fc166072146.js",
    "revision": "22cbd85950fd2afe0ab9b77cc46d547f"
  },
  {
    "url": "/_nuxt/61d89c48911e9d2ca91a.js",
    "revision": "ef5ca0f794660a3e9a60907454df559c"
  },
  {
    "url": "/_nuxt/6226d6fe03779b1c285e.js",
    "revision": "0e5644863bc32bbf5eece63f06cbf619"
  },
  {
    "url": "/_nuxt/8156a955a1761dbcf99d.js",
    "revision": "8683ebd4a496aa837f0f43c281c513dc"
  },
  {
    "url": "/_nuxt/8ef5bfed568329fbda95.js",
    "revision": "6b40f42b99a3f448c64aaf4c3c2f22ae"
  },
  {
    "url": "/_nuxt/9547b9625a43f2ba2e6a.js",
    "revision": "dfa2257b477537bbeef1d63f78945337"
  },
  {
    "url": "/_nuxt/a16e0665029200cbf7ad.js",
    "revision": "1b0c1606326d0b77478ad89eabc74497"
  },
  {
    "url": "/_nuxt/b0b7caecea91e8c82cdc.js",
    "revision": "3f3b332c830b6713b5dd186448bd4fef"
  },
  {
    "url": "/_nuxt/c907adbd1e1db966f474.js",
    "revision": "4b0a01f5f53a9974aec209208160b312"
  },
  {
    "url": "/_nuxt/d7ed5690aab39808f750.js",
    "revision": "0aaa8bc99982a290e195177a2d05fca0"
  },
  {
    "url": "/_nuxt/d8d4477556954822e8ae.js",
    "revision": "9d4df828d819b4ecf3f1c2725c321f4e"
  },
  {
    "url": "/_nuxt/e154cd2d9f3f10fc62dc.js",
    "revision": "46f89aa6101b9ebc78a4991983f70441"
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
