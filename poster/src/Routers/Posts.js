import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";


function Posts() {
  

  return (
    <>
       <Outlet />
       <PostList />
    </>
  );
}

export default Posts;

export async function LoaderData(){
  try{
          let response = await fetch("http://localhost:8080/posts");
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          let data = await response.json();
          return data.posts;
          
  
        } catch (e){
          console.error(e.message);
          };
}
