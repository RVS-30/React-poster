import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Post, {LoaderData} from "./Routers/Posts";
import "./index.css";
import NewPost, {action as NewPostAction} from "./Routers/NewPost";
import RootLayout from "./Routers/rootLayout";

const router = createBrowserRouter([
   {
    path: "/",
    element: <RootLayout />, 
    children: [ 
      { path : "/", element: <Post />, 
      loader : LoaderData,
    children: [
      { path: "/create-post", element: <NewPost />, action: NewPostAction},
    ]},
    ],
   }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>
);
