import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize-css'
import './assets/variables.scss'
import './assets/test.css' // BORDERS

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)