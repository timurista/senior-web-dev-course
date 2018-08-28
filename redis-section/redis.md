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

`MSET - sets multiple`
`MGET - gets multiple`

redis handles simple string
5 major datatypes
1) string
2) hashes
3) lists
4) sets
5) sorted sets

## hashes === js objects

```bash
127.0.0.1:6379> hmset user id 45 name "johnny"
OK
127.0.0.1:6379> hget user name
"johnny"
127.0.0.1:6379> hgetall user
1) "id"
2) "45"
3) "name"
4) "johnny"
```
you now have a hashed object "user" with id, name. hm is hash multiple.

## Linked Lists
Insertion really fast, but searching for key is not as fast.

```bash
127.0.0.1:6379> lpush ourlist 10
(integer) 1
127.0.0.1:6379> rpush ourlist "hello"
(integer) 2
127.0.0.1:6379> get ourlist
(error) WRONGTYPE Operation against a key holding the wrong kind of value
127.0.0.1:6379> lrange ourlist 0 1
1) "10"
2) "hello"
127.0.0.1:6379> lpush ourlist 55
127.0.0.1:6379> lrange ourlist 0 1
1) "55"
2) "10"
127.0.0.1:6379> rpop ourlist
"hello"
```
rpop to pop on right hand side
