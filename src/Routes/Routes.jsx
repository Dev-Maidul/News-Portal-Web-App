import {
    createBrowserRouter,

  } from "react-router";
import HomeLayout from "../Layouts/Homelayout";
import Home from "../Pages/Home/Home";
import CategoryNew from "../Components/CategoryNew";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRoute from "../ContextProvider/PrivateRoute";
import Loading from "../Components/Loading";

  
  
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
            hydrateFallbackElement:<Loading></Loading>
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
      path: "/news-details/:id",
      hydrateFallbackElement: <Loading></Loading>,
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: ()=>fetch('/news.json'),
    },
    {
      path: "/*",
      element: <div>Error 404</div>,
    },
  ]);
  
  