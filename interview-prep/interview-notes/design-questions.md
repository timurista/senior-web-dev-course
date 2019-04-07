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


step 1 website users enter the alias for an existing url. You get (existing url, alias, initial date, ending date)

Create table aliases
[ id, url, alias, start, end]

we use LRU caching policy in combination with start date to remove oldest entries.

user sentds (existing url, initial date, ending date) --> server hashes url and gives a 