import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Home, Cart, Favorites, Error } from './pages/'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/favorites'>
          <Favorites/>
        </Route>
        <Route to='/error'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
