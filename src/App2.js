import React, { useEffect } from "react";
import "./reset.css";
import "./App.css";
import Particles from "./Components/Particles/Particles";
import ParticlesLanding from "./Components/Particles/ParticlesLanding";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllRatings,
  getAllRatingsByUserId
} from "./reducks/reducers/ratingsReducer";
import { getAllPosts } from "./reducks/reducers/postsReducer";
import NavBar from "./Components/Navbar/NavBar";
import StickyFooter from "react-sticky-footer";

function App2(props) {
  const dispatch = useDispatch();
 //Summons all redux state into App2 variables listed
  const authState = useSelector(state => state.authReducer);
  const postState = useSelector(state => state.postsReducer);
  const ratingState = useSelector(state => state.ratingsReducer);
  
  useEffect(() => {
    //Axios call to get all posts, ratings, and userRatings into redux state
    const ratingsByUserId = dispatch(
      getAllRatingsByUserId(authState.currentUser_id)
    );
    const ratings = dispatch(getAllRatings());
    const posts = dispatch(getAllPosts());
  }, []);

 

  //Summons logged in status from redux State in variable loggedIn
  const loggedIn = useSelector(state => state.authReducer.loggedIn);

  console.log(
    " App2.js authState, postState, ratingState",
    authState,
    postState,
    ratingState
  );
  console.log(loggedIn);
  return (
    <div className="App">
      <NavBar />
      {loggedIn ? (
        <div>
          <Particles
            props={props}
            authState={authState}
            postState={postState}
            ratingState={ratingState}
          />
        </div>
      ) : (
        <div>
          <ParticlesLanding
            props={props}
            authState={authState}
            postState={postState}
            ratingState={ratingState}
          />
        </div>
      )}
    </div>
  );
}

export default App2;
