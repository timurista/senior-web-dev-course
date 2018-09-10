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
