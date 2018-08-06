## Javascript costs
time to parse and compile js code
during render tree it takes quite a bit of time to parse and compile.

## Dev tools performance profile
- timeline
- can see what gets loaded on page
- first paint
- blue line DOM content loaded
- red line webpage has loaded.

summary tab
- Loading times
- Scripting Rendering
- painting

scripting is the JS, parse and compile. 1.8 seconds for js part to work.

More js sent, longer takes to run

JS execution has to happen on main thread.

## Angular 2
ahead of time compilation, compile ahead of time then ship it ahead of time. THey could lower scripting time. Pros and cons to this.

How can you keep page snappy?
limit animations. THey can cause serious lag. Don't go overboard with them. Triggering animations during scrolling. Layout of website. Takes a while.

webpage test to test on mobile devices etc. Performance budget to keep eye on cost.

fast time to first meaningful paint
fast time to interactive

## Code splitting
minimally functional page needed for home page. App can lazy load or unlock more features. Can load about page js file while browser ins't doing much work.

production build out of box if you do npm run build does that.

## React Routable

React Loadable. An HOC for async loading components with dynamic import