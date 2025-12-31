import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">

        {/* 🔢 Error Code */}
        <h1 className="text-8xl font-extrabold text-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-3">
          Page Not Found
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src="https://illustrations.popsy.co/purple/crashed-error.svg"
            alt="404 illustration"
            className="w-72"
          />
        </div>
        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
