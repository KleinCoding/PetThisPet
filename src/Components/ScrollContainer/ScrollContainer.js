import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ScrollContainer.css'
import Home from "../Home/Home"
import { getAllPosts } from "../../reducks/reducers/postsReducer";



class Viewer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div class = "ImageViewer">
      <h1 class = "WelcomeText">Welcome Text H1 child of ImageViewerDiv</h1>
      <div className = "ScrollBox">
      <h1> This should be the image viewer</h1>
      
      <Home /></div>
     
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts
  }
}
export default connect(mapStateToProps, { getAllPosts })(Viewer);