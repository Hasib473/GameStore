import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import logoimg from "../assets/logo.png";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { setUser, singinwithPopupFunction } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Email Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast.error("Please verify your email first");
          setLoading(false);
          return;
        }

        setUser(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  // 🔁 Forgot Password
  const handleReset = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    navigate("/forgot-password", {
      state: { email }
    });
  };

  // Google Login
  const handleGoogleLogin = () => {
    singinwithPopupFunction()
      .then((res) => {
        setUser(res.user);
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <div className="flex justify-center mb-4">
          <img src={logoimg} className="w-24" alt="logo" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            ref={emailRef}
            type="email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot your password?
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-4"
        >
         <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5" /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
