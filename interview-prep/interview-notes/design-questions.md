# Deisgn Questions

## Design Pastebin
Design Pastebin.com (or Bit.ly)
- bitly service for quickly creating alias dns registries that redirect to websites, they have a time to live of say 3-5 years.

- scope the problem
1. users enter block of text to get random link
2. default setting does not expire
3. can get timed expiration
4. user enters pastes url to view the contents
5. user is anonymous
6. service tracks analytics of pages
  - monthly visit stats
7. service deletes expired pastes
8. high availability

## Assumptions
traffic is not evenly distributed
following a short link should be fast
pastes are text only
page view should be real time

<!-- https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md -->

User request to API web server, reverse proxy, then to forwards to API write server.

API write server sees if url is unique...
  if not unique makes another one
  custom url? use that one

saves to Pastes SQL table
saves paste data to Object Store (AWS)
returns url

SQL struct
```sql
shortlink char(7) NOT NULL
expiration_length_in_minutes int NOT NULL
created_at datetime NOT NULL
paste_path varchar(255) NOT NULL
PRIMARY KEY(shortlink)
```

MD5 hash of ip_address + timestamp
  MD5 uniformly distributed
  128-bit hash value
Base 62 encode
  [a-zA-Z0-9] good for urls, no need to escape special characters
  
## User enters pastes url and views contents
curl -x POST --data '{ page_contents: "hello world"}' https://pastebin.com/api/v1/paste

you get a shortlink back

service deletes expired pastes

## Bottlenecks
1) Benchmark / Load test
2) Profile

HitCounter
  - extract_url. Gets url from log line
  - mapper, emit key value pairs of form date, url
  - reducer, yield key sum(values)


Load Balancer, vs Master-Slave Replicas and tradeoffs.
Fanout service --> user graph, search, notification


step 1 website users enter the alias for an existing url. You get (existing url, alias, initial date, ending date)

Create table aliases
[ id, url, alias, start, end]

we use LRU caching policy in combination with start date to remove oldest entries.

user sentds (existing url, initial date, ending date) --> server hashes url and gives a 