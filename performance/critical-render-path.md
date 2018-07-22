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

