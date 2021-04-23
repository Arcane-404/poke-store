import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'normalize-css'
import './assets/styles/reset.css'
import './assets/styles/test.css' // BORDERS
import './assets/styles/colors.css'
import App from './App'
import { PokemonContextProvider } from './utils/PokemonContext'

ReactDOM.render(
  <StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </StrictMode>,
  document.getElementById('root')
)