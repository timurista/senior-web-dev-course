# Design Twitter

## Constraints
User posts a tweet
User views the user timeline
User views home timeline
User searches keywords
Service has high availability

State assumptions
- traffic not evenly distributed
- posting should be fast
  - fanning out tweet to all followers should be fast unless millions
- 100 million active users
- 500 million tweets per day

timeline
- viewing timeline should be fast
- twitter read heavy vs write heavy
  - optimize for fast reads
- ingesting tweets is write heavy

## High Level Design
client --> 
  web server
  - read api
    - timeline service
      - twitter info service
      - user info service
    - memory cache
  - write api
    - fan out service
      - memory cache
      - Object Store (s3)
      - user service
      - search service
      - notification service
  - search api
    - search service

  - mysql / psql (used by read and search)

