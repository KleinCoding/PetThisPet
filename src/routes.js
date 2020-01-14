import React from 'react';
import { Switch, Route } from 'react-router-dom'
import GuestLanding from './Components/GuestLanding/GuestLanding';
import Home from './Components/Home/Home';
// import AddPost from './Components/AddPost/AddPost';
// import UserProfile from './Components/UserProfile/UserProfile';
import App from './App'

export default (
  <Switch>
    <Route component={App} exact path="/" />
    <Route component={Home} exact path="/Home" />
    <Route component={GuestLanding} exact path ="/Landing" />
    <Route render={ () => {
      return <h1>404 Page Not Found.</h1>
    }} />
  </Switch>
)