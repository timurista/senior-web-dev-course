## What is it?
low-level assembly-like language with compact binary
runs near-native performance

Some of th key insites is that 8 bit env. 

## Module
web assembly binary compiled by browser as machine code
Module is stateless as a blob
shared between windows and workers via postMessage()

## asm.js
Emscripten to compile c++ to webassembly


## Emscripten
we used the emcc compiler to compile the c++ code into javascript for fast compilation.

we had to clone the emscripten repo and then run the binaries


## Next steps
TODO: https://docs.opencv.org/master/df/d65/tutorial_table_of_content_introduction.html

TODO: 
https://github.com/Quramy/opencvjs/blob/featuers2d_only/README.md#opencvjs-

^ above Open CV for js

TODO:
http://kripken.github.io/emscripten-site/docs/getting_started/Tutorial.html#tutorial
 ^ above webassembly tutorial emscripten

## Tutorial
in the example above, we added  a simple hello_world_file cpp file. This just reads the txt file stored on the system.

Using the command `./emcc hello_world_file.cpp -o hello.html --preload-file tests/hello_world_file.txt`

We output the hello.html with hello.data. The data here is the txt file. 

It will run the loadPackage function which takes the virtual location of the file. There is also some module importing of the data file. Still not sure why you need both data and .txt reference.

## TODO:
https://github.com/mbasso/awesome-wasm

## TODO: tutorial
https://codelabs.developers.google.com/codelabs/hour-chipmunk/index.html#2