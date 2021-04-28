import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PokemonContextProvider } from './utils/PokemonContext'
import 'normalize-css'
import './assets/styles/test.scss' // BORDERS
import './assets/styles/reset.scss'
import './assets/styles/colors.scss'
import App from './App'

render(
  <StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)