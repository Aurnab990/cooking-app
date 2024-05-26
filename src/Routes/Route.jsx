import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Signup from "../Pages/Registration/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Allitems from "../Pages/Dashboard/Allitems";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        
      ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
    },
    {
      path: "/allitems",
      element: <Allitems></Allitems>
    }

  ]);