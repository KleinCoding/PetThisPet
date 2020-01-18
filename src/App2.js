import React, {useEffect} from "react";
import "./App.css";
import ParticleBox from "./Components/Particles/Particles";
import { useSelector, useDispatch } from "react-redux";
import {addClick} from './reducks/reducers/ratingsReducer'



function App2(props) {
  const authState = useSelector(state =>state.authReducer);
  const postState = useSelector(state =>state.postsReducer);
  const ratingState = useSelector(state =>state.ratingsReducer);

  
  const dispatch = useDispatch();
  function incrementCounter() { 
    dispatch(addClick())
  }
console.log(" App2.js authState, postState, ratingState", authState, postState, ratingState)
  return ( 
   
    <div className="App">
     <button onClick= {() => dispatch(addClick(), console.log(ratingState))}>
        ADD A CLICK
      </button>
     
      {/*      
      <NavBar />
       <br/> */}
       {/* <h1>Hello, {reduxState.currentUser}</h1> */}
      <ParticleBox props={props} />

      {/* <NavLink to="/Landing"> Landing </NavLink> */}
    </div>
  );
}

export default App2;
