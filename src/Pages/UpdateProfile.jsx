import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Login from "./Login";

const UpdateProfile = () => {
  const { user, updateUserProfilefun } = useContext(AuthContext);
  const nameRef = useRef(null);
  const photoRef = useRef(null);
  const navigate = useNavigate();

  const handleUpdate = () => {
    const name = nameRef.current.value;
    const photoURL = photoRef.current.value;

    if (!name || !photoURL) {
      toast.error("All fields are required");
      return;
    }

    updateUserProfilefun(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully");
        navigate("/my-profile");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {
        user? (<div><input
        ref={nameRef}
        defaultValue={user?.displayName}
        className="input input-bordered w-full mb-3"
        placeholder="Your Name"
      />

      <input
        ref={photoRef}
        defaultValue={user?.photoURL}
        className="input input-bordered w-full mb-3"
        placeholder="Photo URL"
      />

      <button onClick={handleUpdate} className="btn btn-primary w-full">
        Update Profile
      </button> </div>): <Login/>
      }
    </div>
  );
};

export default UpdateProfile;
