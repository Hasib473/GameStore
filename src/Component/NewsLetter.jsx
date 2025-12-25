import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <section className="relative bg-gradient-to-r from-purple-400 to-indigo-400 py-20 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 drop-shadow-lg">
          Join Our Newsletter
        </h2>
        <p className="text-lg md:text-xl mb-10 drop-shadow-sm">
          Get the latest updates, tutorials, and exclusive offers delivered straight to your inbox.
        </p>

        {submitted ? (
          <p className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold inline-block">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white text-gray-800 text-lg"
              required
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-bold px-6 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-6 text-sm md:text-base text-indigo-100">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white opacity-10 rounded-full"></div>
    </section>
  );
};

export default NewsletterSection;
