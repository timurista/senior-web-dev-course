## Classes
tough for humans and computers
reusing logic
giant components
confusing classes

react needs simpler primitve than class component

mixins to reuse methods from classes. Mixins create problems worse than they solve

## RFC
Change or addition detailed design of how they would do it.
Opt-in, additive

## Hooks

```js
const [name, setName] = useState('Marry')

const [surname, setSurname] = useState('Poppins')

useEfect(() => {
  document.title = name + ' ' + surname
})
```

## Use effect hook
you can opt out, but they are consistent by default

## window size updates

```js
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);

  // can be optimized also
  window.addEventListener('resize',handleResize)

  // avoids memory links
  return () => {
    window.removeEventListener('resize', handleResize);
  }
}, [w])
```

## Custom hooks
javascript functions take title and return them.

```js
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
```


## UseState

## Suspense Component
Used like error boundaries
react raverses back up tree to find the nearest suspense component

fallback and maxDuration props

experimental packages
  - scheduler for cooperative scheduling browser env
  - working with chrome team to integrate multiple priority queues into browser

`import { scheduleCallback as defer } from 'scheduler';`

how do you test priority of things
defer(() => {

})

and 

```js
createResource(src => {
  return new Promise((resolve, reject) {
    return {
      img.onload: resolve,
      img.onerro: reject,
    }

  })
})
```

## Project
the platform palmer, neat suspense-wrapper components. Videos, stylesheets, etc. font one

upgrade path, strict mode
clean up errors then convert part of tree to concurrent mode.

cutover entirely, DOM.render
you render app using react.domCreateRoot

## Profiler
you get to see tree of things being rendered, how long. Commit steps. 16.5 and 16.6. useufl

## Use Memo
`useMemo from react`
memoize the thing to onsly change users searchText change. UseCallback is like useMemo but returns memoized function.

## Webpack-free version
Parcel, Metro, etc.
common misconception that you can use getINitialProps anywhere in tree.

also fetch-dedupe
  - like apollo cache layer
  - wrap fetch, network first, cache first
  - missing cache layer for fetch

## More Polish
go back and make it pretty

## Framerx
