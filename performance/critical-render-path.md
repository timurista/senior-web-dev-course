## Critical Render Path
client request site, server returns file

html file arrives
as soon as it arrives, DOM starts being written

tree of tags we need to build as it reads the HTML
then it hits a css, so it asks for css from server

CSSOM, tree model with styling info attached to tree nodes

then js tag, grabs from server and then it reads js and executed on DOM
and CSSOM

render tree, css lay

DOM -> CSSOM -> JS -> Render Tree -> layout -> Paint

## How do we optimize DOM loading?
1. load css files as soon as possible
2. script js files as slow as possible (usually)
3. analytics may be put at top ... in general put script tags at bottom as it will load faster
4. style tags should be at top to load asap

## Optimizing CSS
css is render blocking because we wait for css dom to complete.
want css to be as lightweight as possible.
  incorporate
  media attributes

1. load what you need

2. above the fold loading
  - if you are user (you only care what you see on the first page)
  - see whatever is above the fold, optimize it
  - only css what you need above fold

above the fold (render)
below the fold (defer rendering)

you can use function in body to load css after content has rendered

```js
const loadStylesheet = src => {
  if (document.createStylesheet) {
    document.createStylesheet(src)
  } else {
    const stylesheet = document.createElement('link')
    stylesheet.href = src
    stylesheet.type = 'text/css'
    stylesheet.rel = 'stylesheet'
    document.getElementsByTagName('head')[0].appendChild(stylesheet)
  }
}

window.onload = function() {
  loadStylesheet('./styles3.css')
}
```

## Media queries in html file
css load for media queries

```html
<link rel="stylesheet" type="text/css" href="./stylesheet2.css" media="only screen and (min-width: 500px) >
```

## Less specificty
More specificity === more bytes need to download
small but only 2 items

sometimes you can also just inject stylesheet in the DOM, but tradeoff is it will only load on one page.

## Optimizing JS
script file is paused and once loaded can't be executed before css is fetched. JS is parser blocking.

Couple things we can do
- load scripts asynchronously

script async, we can tell browser to download js to another worker on low priority. Then when executes sitll blocks things.

Could load way user page loads.
with async add them to anything that doesn't affect dom etc. All extra scripts, analytics or tracking scripts.

waits and executes until html is loaded. Defer is good if core functonality does not require javascript.

## Other options
avoid long running javascript
modern browsers do a partial redraw. Want to minimize DOM mainpulation.

