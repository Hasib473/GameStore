import { useLocation, useNavigate } from "react-router";
import { useRef, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
const { setPasswordResetFuction } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location]);

  const handleReset = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setPasswordResetFuction(email)
      .then(() => {
        toast.success("Password reset email sent");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Password
        </h2>

        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
        />

        <button
          onClick={handleReset}
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>

        <button
          onClick={() => navigate("/login")}
          className="btn btn-outline w-full mt-3"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
