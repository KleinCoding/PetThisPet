import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from "../../reducks/reducers/postsReducer";
import PostCard from '../PostCard/PostCard';
import Axios from 'axios';
import '../../App.css'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      randomPost: 1,
      lockRating: false,
    }
   
     } 

  componentDidMount() {
    this.props.getAllPosts();
  }




  randomize(){
    let a = Math.floor(Math.random() * this.props.posts.length)
  if(a !== this.state.randomPost){
    this.setState({ 
      randomPost: a,
      lockRating: false})}
    else{this.randomize()}
    console.log("randomizer: state, random post:",this.state.randomPost,"value of a", a)
    
}


handleStarClick(index){
//This functions needs to: send the index value to the database as a rating for this image and this user
//It needs to set state value to change LockRating to true
}

  render() { 
   
    console.log(this.props.posts)
    
    const { posts } = this.props;
    const postsCopy = posts.slice(this.state.randomPost, this.state.randomPost+1)
  
    const postsMapped = postsCopy.map((post, i) => {
      return (
        
        <div key={i}>
          
          <PostCard user={post.user_id} url={post.img_url} pet_name={post.pet_name} 
          category_name={post.category_name} post_id={post.post_id} username={post.username} 
          LockRating={this.state.lockRating}/>
         </div>
      )
    })
    return (
      <div ClassName= "HomeContainer">
        <h1>Home App</h1>
        <button onClick={() => Axios.get("/auth/logout")}>LogOut</button>
        <button onClick ={this.randomize.bind(this)}>Randomize</button>
        {postsMapped}
       
	       
  			<br/><br/>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts
  }
}

export default connect(mapStateToProps, { getAllPosts })(Home);