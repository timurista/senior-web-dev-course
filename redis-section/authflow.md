## Authorization flow
users hit /signin with username and password
server generates jwt token and we send it back to browser. THen we store token on client. Then we send /profile/23 token to server.

## Cookie flow
server sends cookie back to browser, and it sends piece of text which is cookie back to server. So redis would store session ie cookie or piece of string so you can send them package.

## Redis DB check
we will check redis library to check jwt redis string then server will check that and check session then send package. We store jwt on db and check against it.

