Harbor Home — Official Icon Pack (lighthouse)
=============================================

Files:
  icon-192.png           Standard app icon, 192x192 (favicon, header, apple-touch)
  icon-512.png           Standard app icon, 512x512 (install / manifest)
  icon-maskable-512.png  Maskable icon, 512x512 (Android safe-zone)
  favicon.ico            Browser tab icon, 64x64

Where they go in the project:
  icons/icon-192.png
  icons/icon-512.png
  icons/icon-maskable-512.png
  icons/favicon.ico

The header logo and tab favicon are ALSO embedded directly inside index.html
(as base64), so the single file shows the logo even without this folder.

manifest.json references ./icons/icon-192.png, ./icons/icon-512.png,
./icons/icon-maskable-512.png. The service worker (sw.js) precaches all four.
