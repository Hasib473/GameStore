import { createBrowserRouter } from "react-router";
import Root from "../Component/root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import About from "../Pages/About";

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
        }
    ]
  },
]);