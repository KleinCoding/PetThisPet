import React, { Component } from 'react';
import './ScrollContainer.css'



class Viewer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div class = "ImageViewer">
      <h1 class = "WelcomeText">Welcome Text H1 child of ImageViewerDiv</h1>
      <div className = "ScrollBox">
      <h1> This should be the image viewer</h1></div>
     
      </div>
    )
  }
}

export default Viewer;