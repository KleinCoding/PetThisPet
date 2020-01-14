import React, { Component, useState, useMemo, useCallback } from 'react';
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

 
    function shuffle(a) {
      for (let i = this.props.posts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
      console.log(a)
    }
 
    const myArray = this.props.posts;

  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    console.log(this.props.posts)
    
    const { posts } = this.props;
    const postsMapped = posts.map((post, i) => {
      return (
        <div key={i}>
          <PostCard user={post.user_id} img_url={post.img_url} pet_name={post.pet_name} category_name={post.category_name} post_id={post.post_id} username={post.username} />
        </div>
      )
    })
    return (
      <div>
        <h1>Home App</h1>
        <button onClick={() => Axios.get("/auth/logout")}>LogOut</button>
        <button>Randomize</button>
        {posts[1]}
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