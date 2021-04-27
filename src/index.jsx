import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'normalize-css'
import './assets/styles/test.scss' // BORDERS
import './assets/styles/reset.scss'
import './assets/styles/colors.scss'
import App from './App'
import { PokemonContextProvider } from './utils/PokemonContext'

render(
  <StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </StrictMode>,
  document.getElementById('root')
)