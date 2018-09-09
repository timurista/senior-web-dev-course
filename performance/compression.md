## Cdns
Caching around world
cloudflare update dns service to use cloudflare. 

Edge server makes request to origin server, then edge server responds to client. After initial request, data is cached or remembered in cdn.

can block spammers, etc. Edge nodes can reduce bandwidth consumption and load balancing. Also very secure.

## Cloudfront
and CDN from azure. Fairly cheap to use, in time you can optimize using them.

## GZIP
makes size of files smaller.
Express, require compression and require on middle ware.

`compression` npm package on express server

## Brotli 
better encoding (Br) will probably surpass gzip. 20% better.

## Database scaling
1. idnetify inefficient queries

- am I making sql from api as efficient as possible? Not asking for too many joins etc. But 1) only request what you absolutely need. 2) indexes

when you query a db, you access entire disk block. Data is usually NOT sorted. But if it was sorted, then performance increase will be huge.

## Indexing
more space on system, but will make it faster.
`CREATE INDEX idx_name on table_name (column_name);`
storage is slowest piece in relational database.

Increase memory by improving hardware for the DB. 
Vertical scaling, redis or memached. Another service so your system uses things better. Memory storage can increase memory of DB. Cache response in redis and see if it has that info. Otherwise do db.

## Sharding
Very tough problem, basically you break website into different pieces. Like users under 20, over 30, etc.

## Also add more DB
give 330 requests, etc. distribute the load so they can distribute requests.

## Database types
some db are better at some things than others.

