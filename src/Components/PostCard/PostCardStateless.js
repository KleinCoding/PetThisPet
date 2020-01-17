import React, {Fragment, useEffect, useState, } from "react";
import axios from 'axios'
import "../../App.css";
import Ellipsis from "../Loading/Loading"
import { ReactQueryConfigProvider } from "react-query";
const queryConfig = {
  suspense: true
};



 export default function usePostCardStateless(props){


  const [data, setData] = useState({});
  const [url, setUrl] = useState(
    '/api/posts',
  );
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const res = await axios(url);

      setData(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);


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
        {console.log(props.i)}
        {console.log(data[props.i])}
        {0}
        
        <h4>This is the PostCard</h4>
           
        <ul>
          <li>post ID: {data[props.i].post_id}</li>
          <li>owner ID: {data[props.i].user_id || props.user_id}</li>
          <li>owner username: {data[props.i].username || props.username}</li>
          <li>category: {data[props.i].category_name || props.category}</li>
          <li>pet name: {data[props.i].pet_name || props.pet_name}</li>
          <img className="postcardimg" src={data[props.i].img_url || props.url} alt="pet"></img>
          
          

 
        </ul>
      </div>
          )}
          </React.Suspense>
           </ReactQueryConfigProvider>
          </Fragment>
   )
 
         
     

  

   usePostCardStateless.defaultProps = {
    post_id: "Dummy Data",
    username: "Dummy User",
    category: "Dummy Pet",
    pet_name: "Dummy",
    url: "https://images-na.ssl-images-amazon.com/images/I/71gCr5ln0rL._SX466_.jpg"
}


}

