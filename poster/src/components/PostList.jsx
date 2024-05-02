import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";


export default function PostList({ isPosting, stopPost }) {
  const posts = useLoaderData();
  // const [posts, setposts] = useState([]);
  
  
  // useEffect(()=> {
  //   async  function fetchData() {
  //     try{
  //       let response = await fetch("http://localhost:8080/posts");
  //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  //       let data = await response.json();
  //       setposts(data.posts);
        

  //     } catch (e){
  //       console.error(e.message);
  //       };
  //   }
  //   fetchData();
  // }, []);

 
  // function handlePost(newPost) {
  //   fetch('https://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(newPost),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   setposts((prev) => [...prev, newPost]);
  // }
  return (
    <>
      
      <ul className={classes.posts}>
        {posts.map((item, index) => {
          return <Post key={index} author={item.Author} body={item.Body} />;
        })}
      </ul>
    </>
  );
}
