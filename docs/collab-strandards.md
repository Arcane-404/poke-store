# Collab Standards

## Consistency
- files: `_.jsx`
- variables: camelCase
- components: PascalCase
  - funtional components - arrow fn
  - helper functions - declare fn
- no semi-colons `;` in jsx files
- single quotes `''`

## Data
```json
[
  {
  "id": 1,
  "pokemon": "pikachu",
  "isFavorite": false,
  "price": 10,
  "description": "Ash's favorite Pokemon",
  "type": ["electric"],
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
  },
  {...}
]
```

## Component
```jsx
// rafce (shortcut)
// with hooks
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