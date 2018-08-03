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

## Why use Redux over React?

We need to understand WHY we need it. Most of them also use redux too, we use Mobx.

What does Redux do well?
  large state management
  useful for sharing data between containers
  predictable state management using 3 principles

# 3 Principles
1. Single source of truth
2. state is read only
3. changes using a PURE function
  same input ==> same output

### Action
something user does, and creates a an action.

### Reducer
pure function, receives input and produces an output which is store ie entire app. Then react makes changes

all actions one reducer, which always returns same state and updates store. Which then makes changes. All actions are funneled to one reducer.

## Redux Flux pattern
Action => Dispatcher => Store => View

one way data flow
before this, we had MVC
action => controller => [... Models] => view
model updates view


Problem with MVC pattern?
one view can make a change and update the model, and vice versa. Harder to reason about.

### Redux
basically same as this.state, and have it happen inside redux library. But one cavaet, however you can keep some state in react component. Might make sense to use react only at some time.





