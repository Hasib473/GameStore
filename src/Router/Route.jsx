import { createBrowserRouter } from "react-router";
import Root from "../Component/root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import About from "../Pages/About";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import GameDetails from "../Pages/GameDetails";

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
            loader : async () => {
              const res =await fetch('../../public/Info.json');
              const data = await res.json();
              return data;
            },
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
        },
        {
          path:'gamedetails/:id',
          loader: () => fetch('../../public/Info.json'),
          Component: GameDetails
        }
    ]
  },
]);