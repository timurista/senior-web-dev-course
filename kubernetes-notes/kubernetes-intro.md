## Kubernetes Notes

Examples
https://github.com/LevelUpEducation/kubernetes-demo

GitHub Repository: 

https://github.com/LevelUpEducation/kubernetes-demo

Learning DevOps & LevelUp Facebook Group: 

https://www.facebook.com/groups/1911219079195863/

## More notes
We used to deploy software to machines we purchased to test apps. But huge cost. So we went to hypervisor-based virtualization where you have hypervisor layer which allows a guest OS with bins and libs to live ontop of your computer or cloud with multiple apps. But kernal resource allocation was a problem, might be easy to scale but memory intensive, entire kernal or OS duplicated. We have 3 kernels even though there can be just 1 OS.

Application Portability is hard

## Docker
Container Based solutions... server then ontop of OS we can run a container which is a guest instance. App1, and Bins/Libs. No Replication of kernals. Base kernel, virtualization happens at OS level.

Need isolation. 2 Java apps with diff JREs, but containers we can isolate 2 runtime environments.

## Docker client server arch
docker client (command line and kitematic gui)
daemon is persistent process to boot run and distribute
docker daemon is docker engine or docker server
docker client ==> remote docker daemon
docker client --> docker machine

Docker run
it grabs busy-box image from server
then uses local copy to run the container

`docker run -it busybox:1.24` puts you right inside the container environment to run. Think of -it as interactive

## Images
read only templates used to create containers
created with docker build, by us or by other docker users
images are composed of layers of other images

## Containers
image is class, container is instance of class. Lightweight and portable encapsulations of the environment.

## Registries
where you store images /registry
you can host your own registry or use Docker's public registry called DockerHub

images are stored in repos inside registry

## Docker Hub
public repo with a number of repos to user.
Browse to see what we can find.
Popular repos

use official images
- dedicated team for reviewing image content
- security update

