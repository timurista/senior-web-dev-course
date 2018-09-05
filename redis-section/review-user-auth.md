# Auth flow
user signs in, they get a token
then server gets token and they can store token in redis db and if everything checks out they can get it.

## Updating sign in endpot
Signin endpoint, we get database and bcrypt. (Dependency injection) where you get the database and this works both ways. So whevenver post gets hit we add req and response independently.

## What accomplished with session tokens
we created signin function to handle user sign in and generate the token and save it in redis. Then on the FE you sign in and get the token from redis that you can use in the app in window.session. Then we also created requiredAuth middleware to prevent certain actions from happening.

YOu are able to scale also because you need to just add more redis db to it. YOu can use this token to add to multiple apis in this server.

## Client storage
Any time they need this, they grab token and checking redis they can get id / token. 

## Exercise: #4 - Improving SmartBrain
Section 13, Lecture 312
Wow, we've really come a long way with the Smart Brain App. However, I bet you noticed many areas that we can improve the application. You see, software is always a constantly evolving journey. As you gain more experience you start to notice areas you can improve the code, and areas you can refactor. This is what you want. It means you are connecting the dots and understanding the information flow between different systems. To continue to practice this skill, I have a few tasks for you. Just like in the real world, there won't be a solution file for you at the end of this one. It either works or it doesn't. Using all you have learned up to this point, using all of your resources (including our community on Discord), see if you can implement these features:



Task 1: Add pet  and age  column to the database and allow users to update these fields on their profile.

Task 2: Implement token flow as we have done so far for /register  end point as well.

Task 3: Add Sign out functionality where you revoke the token when a user signs out of the app

Task 4 (Bonus): You may notice a lot of repeated code (especially when it comes to fetch()). How can you improve this? Try to refactor the code and perhaps also improve the logic to make the app even better!

You can find the github repositories of the code we have worked on up to this point below:
Front End
Back End
Back End - Dockerized

Enjoy the exercise... it's a tough one!