## Best practices
instead of 3 commands, better to chain them together for better performance

## Aggregate
RUN apt-get update && apt-get install -y

Below you can overwrite the created image using run command as argument.

```shell
☕ ~/p/s/kubernetes-notes > docker run 63dc3714c64f
hello world
☕ ~/p/s/kubernetes-notes > docker run 63dc3714c64f echo "hello docker"
hello docker
```

## Docker cache
next time if instruction doesn't change, docker will reuse existing image layer.
Using cache helps to make it much faster.

## Aggresive caching
All layers and you could get out of date commands.

solution is to grab everything in one run command so no steps are cached. You can also invalidate cache and that will help.

## COPY instruction
