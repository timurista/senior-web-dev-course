# Security Smarts
Linkedin, yahoo etc. are attacked everyday. We need good security, but what does that mean?

## A secure application?
Noting happens, stable and won't cause issues. Hard to see the value in it. They get hired to make good decisions on projects. Security best practices to app without being told.

## 80% we can solve and be way ahead?
What are the 80%?
Lets find the guidelines

## Injections
  - most common attacks
  - 50% your preventing against injections... preventing most other problems

Injections is inserting code INTO code.
SQL injection. 1=1--

TOu can use the `'; DROP TABLE users; --` input to attempt to drop the table by injecting this bit of code into user input sent on to server.

Also, you could send `' or 1=1--` in password field to attempt to return true and log user in returning all the user information back to the client.

IF you are able to inject image into html
you can call onerror
`<img src="/" onerror="alert('boom')">`

## WHitelist
Sanitize html
remove html, preserve only html stuff

Parametrize Queries
- function that evaluate things.
- ORMS (Object, Relational Mapping does this)
  - knex.js give params title, author, year only thing we can do. You can only add params.

1. Validate user input
2. never directly inject user content into anything


Example of sql injection
https://www.hacksplaining.com/exercises/sql-injection

