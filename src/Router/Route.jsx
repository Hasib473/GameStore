import { createBrowserRouter } from "react-router";
import Root from "../Component/root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import About from "../Pages/About";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component:Home
        },
        {
            path:'/apps',
            Component: Apps
        },
        {
            path:'/about',
            Component: About
        },
        {
          path:'/login',
          Component: Login
        },
        {
          path:'/signup',
          Component: SignUp
        }
    ]
  },
]);