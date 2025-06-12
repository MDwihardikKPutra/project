// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Frown, ArrowRight } from "lucide-react"; // Ensure ArrowRight is imported if used

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary-blue via-dark-gray to-secondary-blue text-app-white text-center px-4 pt-20">
      <div className="max-w-md mx-auto py-12">
        <Frown className="w-24 h-24 text-primary-red mx-auto mb-8 animate-bounce-slow" />
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-app-white/80 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-primary-red hover:bg-primary-red/80 text-app-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound; // <--- THIS LINE IS ABSOLUTELY ESSENTIAL
