import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import logoimg from '../assets/logo.png'
// import { auth } from "../firebase/firebase.config";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {

    const { createUserWithEmailAndPasswordFunction ,sendUserVerificationFunction } = useContext(AuthContext);
    const navigate = useNavigate();
    const text =
        "Create your account and start your journey with us today.";

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, 40); // speed (lower = faster)

        return () => clearInterval(interval);
    }, []);


    const [photoURL, setPhotoURL] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must be at least 8 characters and include uppercase, lowercase, number & special character"
            );
            return;
        }

        console.log(name, email, photoURL, password);
        // firebase registration logic 
        createUserWithEmailAndPasswordFunction(email, password).then((res) => {
            sendUserVerificationFunction().then(() => {
                toast.success("Verification email sent. Please check your inbox.");
            }).catch((err) => {
                console.log(err.message);
            });
         
        console.log(res.user);
        toast.success("User Registered Successfully");
        navigate('/login');

    }).catch ((err) => {
        console.log(err.message);
        toast.error(err.message);
    })


};

return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-purple-100 p-4">

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white/20 backdrop-blur-xl 
                   rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2"
        >
            {/* Left Section */}
            <div className="hidden md:flex flex-col justify-center p-10 text-white">
                <h2 className="text-4xl font-bold mb-4"> <img src={logoimg} alt="" /></h2>
                <p className="text-black/80 mb-6 text-xl font-bold min-h-[56px]">
                    {displayText}
                </p>



            </div>

            {/* Right Section (Form) */}
            <div className="bg-white p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Photo URL */}
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Profile Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg 
                         hover:bg-indigo-700 transition"
                        type="submit"
                    >
                        Register
                    </motion.button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </motion.div>
    </div>
);
};

export default Register;
