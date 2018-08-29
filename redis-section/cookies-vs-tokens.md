## Users session and login
When users login they expect that information to persist.

JWT and cookies, sessions

Want protect and unprotected rights.

## Cookies Based AUth
Server checks cookie with header that sets cookie with session. Random piece of string to identify browser.
Server remembers cookie and makes sure it matches. Etc. This is stateful, kept in browser and on server.

## JWT token
server responds with token JWT
has special token. Looks like cookie, but is stored on browser. Browser remembers token, they have to send auth header with Bearer JWT. Then when jwt token is sent, server doesnt need to store it just verifies that token is correct.

Token-based authentication is stateless. Server just needs to decode jwt and verify it is a valid token. THen when user logs out, token is destroyed.

## Pros vs Cons of Token-Based Auth
Advantage of token based is that it is stateless, db contains all data it needs. Servers job is simplified, just verify token. JWT can store data like user id or name of user inside the token. Tokens work better with multiple domains, different apis.

Token can serve token on mobile and web. Cons is that size of jwt is alot bigger. So a number of bytes to transfer back and forth. Storing info can be dangerous if you store anything useful about a user.

1. https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide

2. https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies

3. https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens
