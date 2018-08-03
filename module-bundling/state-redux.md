state = { signedInAs: 'user' }

then if state changes,
you get new state that flows down to child. One way data binding

One child
state = { admin: '' }

Child B
state = { user: 'mitch' }

state === memory, needs to know things to work

## Robofriends has some state
State with search box lea. State gets more and more complicated.
Simple react has nice views.
But as it grows you have a ton of state which flows down to each component.

well you can create a store, single object to describe how app should look. And you just pass down to the app you need it.

Redux can hold state.




