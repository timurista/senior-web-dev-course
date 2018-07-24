## Think Critically

How make website 10x faster
website should load within 2 seconds

principles so we avoid performance mistakes

## 3 keys to performance

1. Improve client side, FE needs time to render
2. Improve transfer ie network latency over the wire (100 rq to load completely)
3. Backend processing

many ways to do this, but focus on problem

Think => how can I solve this problem in the most efficient way.
  - have benchmarks or comparison numbers

# Reduce size of sites files
Minimize text
Minimize images

uglify js
build process, webpack to minimize all files

## Minimize images
Image file formats
pick file format which is best for the job
  jpg, png, 

JPG
  images, many photographs, no transparency
  have to use png or gif
  tend to be big also

GIFs
  grainy and oddly colored

PNGs
  few sets of colors you need
  transparency to them

SVG
  vector graphics, illustrator etc
  very simplistic few colors

## New Filetypes
WEB-P
JPEG-XR

## Resources
- https://99designs.com/blog/tips/image-file-types/
- https://pageweight.imgix.com/
- https://www.sitepoint.com/gif-png-jpg-which-one-to-use/

### Resources to Minifiy images
jpeg-optimizer
tinypng

choose simple illustrations (dog icon instead) over highly detailed photos
always lower jpeg image quality (30-60%)
image optim good

if you want transparency use png
if you want animations use a gif
if you want colourful images: use a JPG

if you want simple icons, logos, and illustrations use svg

resize images based on size it will be displayed
  500 pixels wide
  chop image down to actual size
  keep resolution small

display different sized images for different background

can easily do this with media queries

save images in diff file sizes

```css
body {
  @media screen and (min-width: 900px) {
    background: url('./medium-image.jpg');
  }
}

body {
  @media screen and (min-width: 600px) {
    background: url('./small-image.jpg');
  }
}
```

delete and go to network tab
browser knows to download only it actually needs at a certain size.
So media queries can take care of that for you.

## CDNs and Remove Image metadata
imgix, take care deliver cache and manage them for you

remove metadata, https://www.verexif.com/en/


# Optimization via Delivery Optimizations

less trips, only for the code we need.
Use natively supported stuff
element selection has been simplified, addEvent, etc. find lightweight libraries. Think twice before you throw them on

browsers will only make a certain number of max number of requests it can make
  - limit trips the delivery man makes


## Website for monitoring performance
`https://gtmetrix.com`


## Keiko Website performance
1. PageSpeed Insights
2. WebPageTest

