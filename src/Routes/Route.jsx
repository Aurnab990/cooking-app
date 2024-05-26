import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Signup from "../Pages/Registration/Signup";

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
    }

  ]);