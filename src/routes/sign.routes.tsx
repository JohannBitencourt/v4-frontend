import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/login.page'
import Signup from '../pages/signup.page'
import NotFound from '../pages/not-found.page'

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default SignRoutes
