import React, { useEffect, useState, } from "react";
import axios from "axios";
import "../../App.css";
import Rating from "../Rating/Rating";
import Rating2 from "../Rating2/Rating2";




 export default function postCardStateless(props){
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/posts")
  //     .then(result => setData(result.data));
  // }, []);

    return (
      <div className="PostCard">
        <h4>This is the PostCard</h4>

        <ul>
          <li>post ID: {props.post_id}</li>
          <li>owner ID: {props.user}</li>
          <li>owner username: {props.username}</li>
          <li>category: {props.category_name}</li>
          <li>pet name: {props.pet_name}</li>
          <img className="postcardimg" src={props.url} alt="pet"></img>
          {/* <div className="StarButtonsCard">
            {this.state.prevRated === true ? (
              <Rating2
              post_id={this.props.post_id}
              user_id={this.props.user}
              fillBG="#f1c40f"
              initialBG="white"
              initialValue={this.state.initialValue}
              lockRating={this.state.lockRating}
              editable={this.state.editable}
              ratings_user={this.props.ratings_user}
              prevRated= {true}
              callback={index =>
              alert(`You rated my component with a ${index}`)
              }
              containerStyle={{ maxWidth: "200px" }}
            />
            ) : (
              <Rating
              post_id={this.props.post_id}
              user_id={this.props.user}
              fillBG="#f1c40f"
              initialBG="white"
              initialValue={this.state.initialValue}
              lockRating={this.state.lockRating}
              editable={this.state.editable}
              ratings_user={this.props.ratings_user}
              prevRated ={false}
              callback={this.handleVote}
              containerStyle={{ maxWidth: "200px" }}
            />
            )}
            
          </div> */}
        </ul>
      </div>

      
    );
  

  }

   postCardStateless.defaultProps = {
    post_id: "Dummy Data",
    username: "Dummy User",
    category: "Dummy Pet",
    pet_name: "Dummy",
    url: "https://images-na.ssl-images-amazon.com/images/I/71gCr5ln0rL._SX466_.jpg"
}


 

