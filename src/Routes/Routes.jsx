import {
    createBrowserRouter,

  } from "react-router";
import HomeLayout from "../Layouts/Homelayout";
import Home from "../Pages/Home/Home";
import CategoryNew from "../Components/CategoryNew";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AuthLayout from "../Layouts/AuthLayout";

  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/category/:id',
            Component: CategoryNew,
            loader: ()=>fetch('/news.json'), 
        },
      ]
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {
          path:'/auth/login',
          Component:Login,
        },
        {
          path:'/auth/register',
          Component:Register,
        }
      ]
    },
    {
      path: "/career",
      element: <div>News</div>,
    },
    {
      path: "/*",
      element: <div>Error 404</div>,
    },
  ]);
  
  