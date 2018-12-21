# AlgoCasts

General notes on coding solutions

## Runtime
you could have linear n runtime, or O(n*n) as exponential time runtime complexity.

Combining time
constant run time.

no matter what input it will take almost exact amount of time.

## Solution
you need to get it in logarithmic or constant time.
Double elements but not.
Searching will always at best take logarithmic time

linear runtime will take 1 unit.

quasi-linear time:
n * log(n)
1 + a little bit, many sorting algorithms run n * logn time.

**handshake problem**
each new person you add, has to now handshake every other person in the room.

exponential time
one of worst case.
want to avoid algorithm that is exponential time.
Usually better time to solve

recognize an algorithm as being inefficient.

## Interview setting
Identify runtime complexity
Experience, look at diff algorithms

runtime complexity constants are dropped out of calculation.

reverse 2 strings in 1 runtime call.
O(n + m)
second argument then it's m

2 collections of data n*m

sorting shortcuts
o(n * logn)
searching a sorted array
O(logn)

## Space complexity
how much memory or ram it needs.
time on time complexity


## Data structures
some optimal runtime complexity for adding, updating or editing data.

optimal runtime complexity for what we want to solve.

you will be asked about putting together a queue from scratch.

## FIFO and Queues
first in, first out principle for queues. array unshift and pop()

class that just adds and removes. Hiding functional setting is to make sure another engineer doesnt use array methods on it.

## Build Twitter Design Question

They don't want exact blueprint, but how you communicate what you are trying to say.

## Interviewer
Focus on data model, how you will structure a db. Could try to pivot to discuss the web.

NEVER discuss framework to use. Why would you pick these technologies.

Talk and voice what you are thinking, instant follow up question.

Any particular area you want me to focus on?

## Identify 2 core features of product
like maybe just tweet
and showing user a feed

1. challenges of doing a tweet
what is a tweet in database
topic and mention system work
`#` and `@`

## Build Netflix
2 core features
1) movie viewing
  movie is container for video stream
  need reference pointer for where in movie user was last
  SPEED
    cache first 5 minutes of users movie. (Warm cache)
  Play
    track time spent watching screen
      true time watching as `time_watched`
    update pointer in 5-10 second intervals
  Stop
    saves pointer
    ends video feed
    continues downloading /streaming segmenets into memory
  Restart
    resets pointer
  OnEnter
    load warm cache of 5 minutes of this movie from pointer
    create second pointer
      start downloading and move pointer to reflect donwloaded content
  
  Quality (Optimization)
    measure download rate
    as acceleration reaches threshold
      degrade quality
    remeasure acceleration
      until acceleration is at acceptable level
      degrade quality
    stop if pointer is 5-10 seconds away from downloaded pointer
  
  OnVideoEnd
    triggers if user finishes video
      time_watched
    triggers if video is stale for 2 weeks

      if time_watched > 80% of total time of movie
        increase score of movie_type for recommender system

2) recommendation system
  show list of top 5 videos
  top 5 videos model

  video:
    title:
      string
    genre: 
      Action, Comedy, Romance
    length: 
      short 1 hour, feature length 2 hours, really long
    star-rating:
      avg 0-5
    percent-users-finish:
      total percent of users who finish it
    user_last_finished:
      pointer which references where in movie user last finished watching
    liklihood of viewing:
      percentage (sort property)

Liklihood of viewing:
  avg star rating + mulitplier*(length === feature length) + completed percentage + genre_ranking (how important is this genre to this user) + movie_click_probability (how likely is this user to click on this movie)

## Identify Difficulties
How do we handle when users don't follow our recommendation.
  - introduce some random less likely only to see

Users can't watch videos reliably
  - cache things
  - CDN -- delivery frequently used content close to user
  - reverse proxy to bounce back requests to videos quickly
  - condense information // stream things in smaller packets
  - make use of idle cpu time

Users don't have videos to watch
  - fallback to 

Users can't watch videos on plane
  - offer screen to use idle cpu time to fill app space with data of video

Million users hititng our DB
  - add multiple ec2 instances
  - load balancer
  - it decides cpu utilization and assigns it to them

## Sorting
With 100 records,
  bubblesort n^2
  selection sort n^2
  these are equally fine

with n^2
  use merge sort
  n*logn -- medium to implement







