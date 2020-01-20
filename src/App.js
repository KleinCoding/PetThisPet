import React from 'react';
// import NavBar from './Components/Navbar/NavBar'
// import GuestLanding from './Components/GuestLanding/GuestLanding'
// import Home from './Components/Home/Home'
// import ScrollContainer from './Components/ScrollContainer/ScrollContainer'
import routes from './routes.js'
import './App.css';
// import { NavLink } from 'react-router-dom'


//WhatWhat


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
       <br/>
      <br/>
      <div><h1>This is the App.js</h1></div>
      {routes}
     
{/* <NavLink to="/Landing"> Landing </NavLink> */}
    </div>
  );
}

export default App;
