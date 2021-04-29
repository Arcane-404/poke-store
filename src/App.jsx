import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Checkout, Favorites, Errors } from './pages/'
import { HeaderContainer } from './containers/'

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/cart' component={ Checkout } />
        <Route path='/favorites' component={ Favorites } />
        <Route path='/*' component={ Errors } />
      </Switch>
    </>
  )
}

export default App
