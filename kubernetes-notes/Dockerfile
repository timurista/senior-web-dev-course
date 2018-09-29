FROM debian:jessie

# RUN apt-get update

# each instruction is run inside a container
# once docker written images to image
# commits new image
# containers are ephemeral, write image layer then
# we remove them

# RUN apt-get install -y git
# new image started as next instruction
# it commits intermediate container
# then removes it with image

# creates a container
# then makes image
# then removes container / intermediary layer
# RUN apt-get install -y vim

# this is for optimization running inside 1 container
# alphabetical listing for easier updating
RUN apt-get update && apt-get install -y \
  git \
  python \
  vim


## CMD
# specifies which command to run
# if you don't specify this step, docker will use
# default command defined in base image

# CMD ["echo", "hello world"]

COPY abc.txt /src/abc.txt


## ADD unpack compressed files
## downloads things
## COPY is preferred most of the time
## use copy, unless you are absolutely sure you need add.
