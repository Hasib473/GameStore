import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Login from "./Login";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      {user ? (<div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/2kRZyq0/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-xl font-bold">{user?.displayName}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>

        <Link to="/update-profile" className="btn btn-primary mt-6">
          Update Profile
        </Link>
      </div>) : <Login /> }
    </div>
  );
};

export default MyProfile;
