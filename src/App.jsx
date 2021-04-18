import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path='/'>
            <h1>Home Page</h1>
          </Route>
          <Route path='/cart'>
            <h1>Cart Page</h1>
          </Route>
        </Switch>
    </Router>
    </>
  )
}

export default App
