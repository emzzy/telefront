import React, { useEffect, useRef } from "react";

const NotFound = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.0/lottie.min.js";
    script.onload = () => {
      if (animationContainer.current && window.lottie) {
        window.lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://assets10.lottiefiles.com/packages/lf20_kht874gq.json",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4 font-inter">
      <div className="max-w-md w-full bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700">
        <h1 className="text-7xl md:text-8xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          It seems you've stumbled upon a digital black hole. The page you're
          looking for might have vanished into the ether, or perhaps it never
          existed.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;