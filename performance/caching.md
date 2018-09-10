## Cpus
On Chip registers usually small amount of cached storage. l3, l4 cache they are fastest way to acces memory. Then there is ram, close enoughh to hold info in memory that computer can use. Disk stores long term data.

Caching is everywhere. Cdns cache html, js, css etc files. Also things cached on server.

## Redis caching
it can cache db requests. Node server in redis stored in memory so next time server asks for info it is saved there. Figure out if you can cache query. SO many other places to cache things.

## Browser caching
Browsers also cache information.

## service workers
intercept path and return it.
Activation cache (app storage)
saved in browser. INdexedDB mini db in browser.

How do we cache these things ourself?

## Busting the Cache
npm run build, it makes optimized gzipped file.
We get main js and main css file. If you name it using version controls, then it will get grabbed ie busted from cache no matter what.

## 304 not mofidied
e-tag when it says nothing has modified through this file.

## Caching via set headers
Using headers from express, cache control. Resource with max age. Send response with new buffer.
`res.header('Cache-Control', 'public, max-age=86400')`. Caching implemented at all levels, most likely will start at FE. Like service worker, etc. Only add this if we have good metrics to know it will improve the app.
`https://medium.freecodecamp.org/the-hidden-components-of-web-caching-970854fe2c49`

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching

https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers
