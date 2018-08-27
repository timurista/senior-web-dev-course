## Containers
Composed of multiple layers, services each doing its own thing. They are communicating with each other to do a simple thing. Keep everything small, simple input -> output. Break into small pieces.

lets us create containers around services.

## History Lesson
before docker we had virtualized machines, sandboxed env. Full-fledged computer. Vm was like another computer ontop of it. Pretty big, but consistent matter. Sometimes took a few minutes to spin it up. Docker wraps everything up in complete container to run.

lightweight alternative to full VM, just to run single app on each container. Microservices, use host OS just few seconds and you are up and running.

docker bundles your app into standalone executable image and then docker executes this image inside this container which is isolated from host machine.

Docker hub is like npm, store-like website to download and use. Node image to use. 

small services to duplicate so we can grow with it.

## Why the hassle of Docker?
Ensure that same version of node, postgres, and other services are used consistently on each developers machine. Containers let us run piece of software everywhere. We can share that code with anyone and that will work properly.
DOcker build, run, exec commands to run docker. Now we can run the distributed application from one single command. We can link them and do port forwarding and connect these 2 pieces together. And some fun things with SQL.

Docker also lets us wrap single services in container and we can keep duplicating these services and we don't have to worry about managing everything.



