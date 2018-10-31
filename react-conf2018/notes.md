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
