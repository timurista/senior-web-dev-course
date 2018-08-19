## Server Side Rebder vs SPA
first webpage conventional method was using server side rendering, render it and send to client. Then client gets that info and shows it.
Very little interactivity back then.

SPA producthunt, etc. is done inside app. Page doesn't refresh just parts of page refresh you need. Websites are more like apps.

## SPA
good SEO on single page app is harder. Client side rendering SPA and server side rendered. 

## Only parts of Webpage loaded

Client SIde rendering, you get blank pages. While we wait.

# SSR
initial request loads faster
you get fully rendered page.
But time to interactive takes a bit longer. Same interactivity point. But it appears FASTER to user.

## SPA
Pros and Cons to everything. Can we make robofriends into server side app?

## Pros and Cons serverside vs client side
Rich interaction
Faster response
web apps --> client side rendering

Cons
Low SEO potential. Google bot only sees div tag
longer initial load

time google bot checks haven't rendered everything. Snapshot of each page. 5-10 seconds

SEO, google searches SSR would be better for them

## SSR
Static sites (react documentation page, text ssr is great for this)
SEO
Initial Page Load (it's super fast)

## Cons
Full Page Reload
Slower page rendering
Holds up event loop --- need to orchestrate this better
  - complexity of core base is increased
Number of requests to server is greater
Website may look faster, but might not be faster in terms of user interaction

## Server side rendering
Gatsby and Nextjs

Gatsby is great for static sites.
Great for documentation and blogs
HMR, prefetching etc.








