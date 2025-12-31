import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import logoimg from "../assets/logo.png";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const  {user, setUser, singinwithPopupFunction,setPasswordResetFuction} =useContext(AuthContext);

const navigate =useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      if(!res.user.emailVerified){
        toast.error("Your email is not verified. Please verify your email before logging in.");
        return;
      }
      navigate("/");
        console.log(res.user);
        toast.success("Login Successful");
        setUser(res.user);
        console.log("Logged in user:", user);
    }).catch((err) => {
        console.log(err.message);
        toast.error(err.message);
    });
  };
  const emailref = useRef(null);
  const handleReset = () => {
    const email = emailref.current.value;
    if (!email) {
      toast.error("Please enter your email for password reset");
      return;
    }
    setPasswordResetFuction(email)
    .then(() => {
        toast.success("Password reset email sent");
    }).catch((err) => {
        console.log(err.message);
        toast.error(err.message);
    });

  }

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    singinwithPopupFunction()
    .then((res) => {
        console.log(res.user);
        toast.success("Google Login Successful");
        setUser(res.user);
        console.log("Logged in user:", user);
    }).catch((err) => {
        console.log(err.message);
        toast.error(err.message);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      {/* Card animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mb-2"
        >
          <img className="w-24 h-16" src={logoimg} alt="Game Logo" />
        </motion.div>

        <h2 className="text-2xl font-bold text-center mb-6">Login Please</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              ref={emailref}
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border rounded 
                         focus:outline-none focus:ring-2 focus:ring-blue-400
                         transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-1 px-3 py-2 border rounded 
                         focus:outline-none focus:ring-2 focus:ring-blue-400
                         transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </motion.button>

          {/* Forgot password */}
          <div className="text-left mt-2">
            <Link
              onClick={handleReset}
            
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Continue with Google
        </motion.button>

        {/* Register */}
        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
