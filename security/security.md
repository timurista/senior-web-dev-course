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

## Logging
For logging packages you can use morgan for tiny output and winston
- note for logging you should limit the kind of requests you are sending out.

## HTTPS everywhere
when you send info from client to server, tunnel known as https for secure. Encrypts info between client and server.

some ways to accidentally setup server without it.

## Let's Encrupt
letsencrypt.org
https certificate. Cloudflare global network of servers, really good. Be default they give you https. Added benefit against DDOS. 

use https make sure it is encrypted

## Cross site scripting XSS
allows attacker to execute scripts in victims browser
run code to different sites from my browser. Stealing 
server that just logs peoples cookies. So I can steal it, session hijacking. You have to sanitize inputs to prevent.

## CSRF
cross site
Client has tunnel when communicating, which gets profile from server. Weather from 3rd party api tunnel. But XSS they can steal users session. But CSRF they create bad url in spam emails. You can do it with post requests and iframe. To fix this, we need to 

## Express Set headers
```js
res.set({
  'Content-Secuirt-Policy': "script-src 'self' 'http://google.com'"
})

res.cookie('session', '1', 
  { httpOnly: true }, 
  { secure: true }
)
```

most time this will be done automatically.
Also make sure document.cookie, savin the cookie as session id.

## Avoid
no eval()
document.write('...') // 
document.innerHtml
CSP
Secure + HTTPOnly COokies

## csurf package
install, require

## Code Secrets
Environmental Variables
and Commit History

NODE_ENV default environment variables default we get NODE_ENV in development or production mode.

In create react app you can add your own .env file with variables that need to be prepended with `REACT_APP` so `REACT_APP_SECRET_KEY`

## DotEnv
`DB_HOST`
process.env.DB_HOST
npm install dotenv

Github has a commit history
-- never want to put up secret files.
Always use .gitignore file.


example look for commit `remove password`
code secrets, hide them protect them.

## Headers

To have secure headers, install `helmet`
`npm install helmet`
helps secure app by setting various headers

`app.use(helmet())` < this secures header
you don't expose x-powered by
strict-transport-security etc.
`react-helmet-async` for concurrency

## Access Control
Principle of least privelege give only enough so people can do their work.

## CORS
Cross Origin Resource Sharing. Access server stuff. Only certain domain can send secrets. By adding CORS, let this cross origin resource sharing happen.

Access to only people we trust. CorsOptions, we check whitelist of domains. Origin that checks this whitelist.

Principle of LEAST PRIVILEGE
only just right amount

## Data Management
encrypting data at rest is pretty infeasible.
when sending data from server to client, https used in that case.

Use encryption for anything like access tokens, email, billing. 

## Hashing passwords
and how to encrypt your data.
pgcrypto, postgress db. Encrypt billing address or user column sensitive info.

Password storage really cool
What should you do with passwords?

## Security 101: Dont trust anyone
anywhere user input, url paths, cookies, etc. form fields. Any process between systems there is a bad actor. So don't trust anyone.

maybe we need ratelimiter, so you can't bombard server.

any time connection to outside world, think about how to prevent bad actors from doing bad things.


