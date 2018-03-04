importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "favicon.ico",
    "revision": "53831083aeb9cb2273bd5a2c3293b559"
  },
  {
    "url": "humans.txt",
    "revision": "435258cfb2f26fc73c65547da0ee0c32"
  },
  {
    "url": "images/ecommerce_frogslab-128x128@1x.jpg",
    "revision": "f16f654b6cbb40c53122335f53ceee72"
  },
  {
    "url": "images/ecommerce_frogslab-128x128@2x.jpg",
    "revision": "6972afe79ce1efd1d746e4e15a4e06ee"
  },
  {
    "url": "images/ecommerce_frogslab-128x128@3x.jpg",
    "revision": "1ae03300f9a518e3ad7f2252277046b8"
  },
  {
    "url": "images/matteo_badini-200x200@1x.jpg",
    "revision": "0354fe9e8539268e7351138841d93316"
  },
  {
    "url": "images/matteo_badini-200x200@2x.jpg",
    "revision": "294ec48a6bf9ec95f866ec59ff296811"
  },
  {
    "url": "images/services/api-development.svg",
    "revision": "ecf8872e2ff68504d9eee5e8fdc4479c"
  },
  {
    "url": "images/services/app-development.svg",
    "revision": "ca074630811d39ef9c1279a876212808"
  },
  {
    "url": "images/services/e-commerce.svg",
    "revision": "82f573bbf3014fb5de6492b73ef69bbb"
  },
  {
    "url": "images/services/web-development.svg",
    "revision": "7fdc39e510981e4f68aeb2e1939c36b2"
  },
  {
    "url": "images/social/facebook.svg",
    "revision": "e1d7267050ab9cfe5afcc22344edd1fc"
  },
  {
    "url": "images/social/github.svg",
    "revision": "ddfb988354ec76dda0471ae51d5e377a"
  },
  {
    "url": "images/social/twitter.svg",
    "revision": "4d2367c2dd57e3d6f0d1502bfcc14326"
  },
  {
    "url": "images/touch/apple-touch-icon-144x144.png",
    "revision": "aeef9e074db185f93390a309da64128f"
  },
  {
    "url": "images/touch/apple-touch-icon-192x192.png",
    "revision": "7bf594b3f2e306bb91536f7e5b184f99"
  },
  {
    "url": "images/touch/apple-touch-icon-512x512.png",
    "revision": "d1df2c7ee1375043cb6e3e21030d4b40"
  },
  {
    "url": "images/touch/apple-touch-icon-57x57.png",
    "revision": "fc264963c9b59b08abd9465a894895de"
  },
  {
    "url": "images/touch/apple-touch-icon-72x72.png",
    "revision": "bb9d1bb675712d3ff61909ecd8555e37"
  },
  {
    "url": "images/touch/apple-touch-icon.png",
    "revision": "fc264963c9b59b08abd9465a894895de"
  },
  {
    "url": "images/web_daccordo-128x128@1x.jpg",
    "revision": "0b22b5c4c981dc1fb6d2eeb0a0c2d57d"
  },
  {
    "url": "images/web_daccordo-128x128@2x.jpg",
    "revision": "8ee7f43f3c5b2d4aa33c00a91fe89eac"
  },
  {
    "url": "images/web_daccordo-128x128@3x.jpg",
    "revision": "76c605e4371b206d2605bf1d91de929c"
  },
  {
    "url": "images/web_daccordo-512x512@1x.jpg",
    "revision": "87ac2276d6909040d90220039071c6df"
  },
  {
    "url": "images/web_orthoponics-128x128@1x.jpg",
    "revision": "593c550ac6ab1f39619718d56dd297e1"
  },
  {
    "url": "images/web_orthoponics-128x128@2x.jpg",
    "revision": "cc160fcde2d01c37c4dd02f664a5e0a7"
  },
  {
    "url": "images/web_orthoponics-128x128@3x.jpg",
    "revision": "967dfb07f7963e870b37f26d4754cfc7"
  },
  {
    "url": "index.html",
    "revision": "426bd630befa736b4ca8c4cee2d04766"
  },
  {
    "url": "manifest.json",
    "revision": "aac297adfd95c18fe65dc97cf0df7b6c"
  },
  {
    "url": "manifest.webapp",
    "revision": "33c0a1302d843cf4e8cf417addec473c"
  },
  {
    "url": "robots.txt",
    "revision": "00733c197e59662cf705a2ec6d881d44"
  },
  {
    "url": "scripts/index.js",
    "revision": "692d08bffcb1deeb2473804794cd55fc"
  },
  {
    "url": "scripts/lazyload-img.js",
    "revision": "10f2ebdea644149fbf4d5045d1979903"
  },
  {
    "url": "styles/critical.css",
    "revision": "017a66caabcb94861da52213b0327e59"
  },
  {
    "url": "styles/lazy.css",
    "revision": "561de37f6286fd0d34ed6d66f018ce7e"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js.map",
    "revision": "1cbd1bf8f8f05f7504355e0f7674b67e"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
