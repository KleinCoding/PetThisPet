import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from "../../reducks/reducers/postsReducer";
import PostCard from '../PostCard/PostCard';
import Axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      randomPost: 1

    }
    
     } 

  componentDidMount() {
    this.props.getAllPosts();
  }

  randomize(){
    let a = Math.floor(Math.random() * this.props.posts.length) 
    this.setState({ randomPost: a})
    console.log(this.state.randomPost, a)
}

  render() {
    console.log(this.props.posts)
    
    const { posts } = this.props;
    const postsCopy = posts.slice(this.state.randomPost, this.state.randomPost+1)
  
    const postsMapped = postsCopy.map((post, i) => {
      return (
        <div key={i}>
          <PostCard user={post.user_id} url={post.img_url} pet_name={post.pet_name} 
          category_name={post.category_name} post_id={post.post_id} username={post.username} />
        </div>
      )
    })
    return (
      <div>
        <h1>Home App</h1>
        <button onClick={() => Axios.get("/auth/logout")}>LogOut</button>
        <button onClick ={this.randomize.bind(this)}>Randomize</button>
        {postsMapped}
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