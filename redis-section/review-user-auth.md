# Auth flow
user signs in, they get a token
then server gets token and they can store token in redis db and if everything checks out they can get it.

## Updating sign in endpot
Signin endpoint, we get database and bcrypt. (Dependency injection) where you get the database and this works both ways. So whevenver post gets hit we add req and response independently.

## What accomplished with session tokens
we created signin function to handle user sign in and generate the token and save it in redis. Then on the FE you sign in and get the token from redis that you can use in the app in window.session. Then we also created requiredAuth middleware to prevent certain actions from happening.

YOu are able to scale also because you need to just add more redis db to it. YOu can use this token to add to multiple apis in this server.
