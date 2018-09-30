## Some notes on running commands

`docker ps -a` lists all containers started on machine
`docker run --name` runs the container specified by the same.
`docker run --rm CONTAINER_NAME busybox:1.24` removes the container by name.

## Docker port
tomcat image page, by default runs 8080
and map it to another way with port:8080.
`-p host_port:container_port`
`-d` is detached and shows us a running container.

## Docker hub
make docker hub account. SIgn up and log into account
avoid latest tag, safest way is just to version tag everytime.
docker login --username=NAME
docker push REPONAME/TAG

## DOcker container
define a user USER admin. In case someone can break a contianer. Use non priveleged server to run app server
then WORKDIR /app

`docker exec -it CONTAINER_ID COMMAND` // run inside running container and login to bash.
