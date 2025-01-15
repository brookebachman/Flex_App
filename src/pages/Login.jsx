import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account", // Always show account selection dialog
  });

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google login:", error);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Already signed in:", user);
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222324] w-full md:w-screen text-white">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
        <p className="text-center text-gray-400">
          Sign in to access your dashboard.
        </p>

        {error && (
          <div
            className="text-red-600 bg-red-100 text-sm rounded p-3 my-4"
            aria-live="assertive"
          >
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </span>
          ) : (
            <span>Sign in with Google</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
