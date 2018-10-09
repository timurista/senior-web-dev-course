## DOcker Container
Links
Docker app container
recipient

then ---> (via host)
to another container

redis container

through links

you establish links by container names

## How do container links work?
`/etc/host` file tells use the IP it is aware of. IP on left column tells you the container ip address.


## Docker compose for linking things
Tool for defining and running multiple container things.
the yml file will start all containers.

services start in right order in microservice world

image instruction says use redis:3.2.0, build image from docker file. and image or build instruction

## Docker compose workflow
use docker-compose build whenever you need to rebuild an image
docker-compose ps check status of containers
docker-compose logs outputs logs of containers
doker-compose rm removes all containers
