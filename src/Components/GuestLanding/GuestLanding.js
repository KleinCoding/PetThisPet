import React, { Component } from 'react';
import Login from "../Login/Login";
import Register from "../Register/Register";

class GuestLanding extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h1>Welcome to PawVotes!</h1>
      New User? Please register below!
      <Register />
      Welcome Back!
      <Login />
      </div>
    )
  }
}

export default GuestLanding;