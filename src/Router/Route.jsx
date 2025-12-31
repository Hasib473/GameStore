import { createBrowserRouter } from "react-router";
import Root from "../Component/root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import GameDetails from "../Pages/GameDetails";
import NotFound from "../Pages/NotFound";
import ForgotPassword from "../Pages/ForgotePassword";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/apps',
        loader: async () => {
          const res = await fetch('/Info.json');
          const data = await res.json();
          return data;
        },
        Component: Apps
      },

      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: 'gamedetails/:id',
        loader: () => fetch('/Info.json'),
        Component: GameDetails
      },
      {
        path: '/*',
        Component: NotFound
      },
      {
        path: 'forgot-password',
        Component: ForgotPassword

      },
      {
        path: "/my-profile",
        element: <MyProfile />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      }

    ]
  },
]);