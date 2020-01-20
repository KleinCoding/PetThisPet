import React, {Fragment, useEffect, useState, } from "react";
import "../../App.css";
import Ellipsis from "../Loading/Loading"
import { ReactQueryConfigProvider } from "react-query";
import './style.css'
import {useSelector, useDispatch} from 'react-redux'

const queryConfig = {
  suspense: true
};



 export default function usePostCardStateless(props){
const dispatch = useDispatch();
  const isLoading = useSelector(state => state.postsReducer.loading)


   return (
    <Fragment>
    <ReactQueryConfigProvider config={queryConfig}>
    <React.Suspense fallback={<div><Ellipsis /></div>}>
      {isLoading ? 
      (<div><Ellipsis />
      </div>
      ) : ( 
  // <div className="column">
  <div className="PostCard">
   
  <h4>This is the PostCard</h4>
           
  <ul>
  <li>post ID: {props.posts[props.i].post_id}</li>
  <li>owner ID: {props.posts[props.i].user_id}</li>
  <li>owner username: {props.posts[props.i].username}</li>
  <li>category: {props.posts[props.i].category_name}</li>
  <li>pet name: {props.posts[props.i].pet_name}</li>
  <img className="postcardimg" src={props.posts[props.i].img_url} alt="pet"></img>
  </ul>
  </div>
  // </div>
          )}
    </React.Suspense>
    </ReactQueryConfigProvider>
    </Fragment>
   )
 

}

