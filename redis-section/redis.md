## Redis setup

go to redis.io
then install latest stable version.

If you encounter issues:

https://stackoverflow.com/questions/37103054/redis-installation-fails-when-running-make-command

https://stackoverflow.com/questions/8131008/issue-with-redis-install

and then follow instructions to run make and unpack on your machine. You'll need to run command which runs server through local port then also run cli to interact with server.

In memory data storage, used for session management.

## What datatypes can this db support?

DataTypes for redis. Very basic one, key/value storage.
Set "keyname" value
get "keyname"
exists "keyname"

## commands
https://redis.io/commands

```
127.0.0.1:6379> set session "jenny"
127.0.0.1:6379> expire session
127.0.0.1:6379> get session
"jenny"
127.0.0.1:6379> get session
(nil)
```
