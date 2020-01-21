import React, {Fragment, useEffect, useState, } from "react";
import "../../App.css";
import Ellipsis from "../Loading/Loading"
import { ReactQueryConfigProvider } from "react-query";
import './postCardStyle.scss'
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
  <div className="column">
  <div className="postCard">
        
  <ul>
  <li>owner username: {props.posts[props.i].username}</li>
  <li>category: {props.posts[props.i].category_name}</li>
  <li>pet name: {props.posts[props.i].pet_name}</li>
  </ul>
  </div>
  // </div>
          )}
    </React.Suspense>
    </ReactQueryConfigProvider>
    </Fragment>
   )
 

}

