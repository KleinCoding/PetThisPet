import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getSession } from '../../reducks/reducers/authReducer';
import '../../App.css'
import Rating from 'react-rating-system';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {
      editPost: false,
      initialValue: null,
    }
  }

  handleOpenEditPost = () => {
    this.setState({ editPost: true })
  }

  //Use a component did mount function to check the database for a user
  //vote on the corresponding image ID and user ID to determine

componentDidMount(){
  //ComponentDidMount WILL NOT RERUN on every randomize!
}

  render() {
    return (
     
      <div className ="PostCard"> 
        <h4>This is the PostCard</h4>
      
        <ul>
          <li>post ID: {this.props.post_id}</li>
          <li>owner ID: {this.props.user}</li>
          <li>owner username: {this.props.username}</li>
          <li>category: {this.props.category_name}</li>
          <li>pet name: {this.props.pet_name}</li>
          <img className ="postcardimg" src={this.props.url} alt="pet"></img>
          <div className ="StarButtonsCard">
          <Rating post_id={this.props.post_id} user_id={this.props.user}
          image="https://www.iconsdb.com/icons/preview/gray/star-xxl.png" 
          fillBG="#f1c40f" initialBG="white" initialValue={0} 
          lockRating={this.props.lockRating}
          callback={(index) => alert(`You rated my component with a ${index}`)}
	        containerStyle={{ maxWidth: '200px' }} />
          </div>
	        
        </ul>
        
      </div>
       
    )
   
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    post_id: reduxState.postsReducer.post_id
  }
}

export default connect(mapStateToProps, { getSession })(PostCard);