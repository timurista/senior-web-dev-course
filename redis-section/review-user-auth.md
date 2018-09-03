# Auth flow
user signs in, they get a token
then server gets token and they can store token in redis db and if everything checks out they can get it.

## Updating sign in endpot
Signin endpoint, we get database and bcrypt. (Dependency injection) where you get the database and this works both ways. So whevenver post gets hit we add req and response independently.
