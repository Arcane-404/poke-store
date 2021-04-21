import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize-css'
import './assets/reset.css'
import './assets/test.css' // BORDERS
import './assets/colors.css'

ReactDOM.render(
  <StrictMode>
      <App />
  </StrictMode>,
  document.getElementById('root')
)