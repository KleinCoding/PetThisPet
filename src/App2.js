import React from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import rootReducer from "./reducks/store";
import NavBar from './Components/Navbar/NavBar'
import routes from './routes.js'
import './App.css';
import ParticleBox from "./Components/Particles/Particles"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// const rootReducer = createStore(reducer);



function App2() {
  return (
    <div className="App">
     
      <NavBar />
       <br/>
       <ParticleBox />
       
       {routes}
      
{/* <NavLink to="/Landing"> Landing </NavLink> */}
    </div>
  );
}

export default App2;
