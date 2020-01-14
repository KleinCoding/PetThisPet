import React, { Component } from 'react';
import Axios from 'axios'
import StarRating from 'react-star-rating';
// import EditPost from "../EditPost/EditPost";
import { connect } from 'react-redux';
import { getSession } from '../../reducks/reducers/authReducer';


class PostCard extends Component {
  constructor() {
    super();
    this.state = {
      editPost: false
    }
  }

  handleOpenEditPost = () => {
    this.setState({ editPost: true })
  }


  render() {
    return (
     
      <div> 
        <h4>This is the PostCard</h4>
      
        <ul>
          <li>post ID: {this.props.post_id}</li>
          <li>owner ID: {this.props.user}</li>
          <li>owner username: {this.props.username}</li>
          <li>category: {this.props.category_name}</li>
          <li>pet name: {this.props.pet_name}</li>
          <img src={this.props.url} alt="pet"></img>
  
        </ul>
        
      </div>
       
    )
   
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  }
}

export default connect(mapStateToProps, { getSession })(PostCard);