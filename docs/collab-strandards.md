# Collab Standards

## Consistency
- files: 
  - react: `*.jsx`
  - hook file: camelCase
  - json file: camelCase
- JS variables: 
  - regular: camelCase
  - fixed: CAP_SNAKE_CASE
- components: PascalCase
  - funtional components - arrow fn
    - `const App = () => {}`
    - `export default App`
  - helper functions - declare fn
    - `function handleClick () {}`
- no semi-colons ` ; ` in jsx files
- single quotes ` '' `
- include white spaces
  - `{ useState, useEffect }`
  - `[ state, setState ]`
- no. of tabs: `2 | 4`?

<!-- - CSS variables: -->
  <!-- - BEM (Block-Element-Modifier) -->
  <!-- - `[block]__[element]--[modifier]` -->

## JSON Data
```json
/* Pokemon Info (Card) */
[
  {
    "id": 25,
  "pokemon": "pikachu",
  "isFavorite": false,
  "price": 10,
  "types": ["electric"],
  "description": "When several of these POKéMON gather, theirelectricity could build and cause lightning storms.",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
  },
  {...}
]
```

## Component Setup
```jsx
// rafce (shortcut)
import React, { useState, useEffect } from 'react'

const Component = ({ num1, num2, num3 }) => {
  const [ count, setCount ] = useState('')
  
  function handleClick (e) {
    setCount(count + 1) 
  }
  
  useEffect(() => { 
    console.log('check state update:',count) 
  }, [ num1, num2, num3 ])

  return (
    <div>
      <h2>Hooks Example: <code>{ count }</code></h2>
      <button onClick={ handleClick }>+</button>
    </div>
  )
}

export default Component
```