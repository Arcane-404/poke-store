import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Checkout, Favorites, Errors } from './pages/'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/cart' component={ Checkout } />
        <Route path='/favorites' component={ Favorites } />
        <Route path='/*' component={ Errors } />
      </Switch>
    </Router>
  )
}

export default App
