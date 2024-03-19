import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 py-3 w-full bg-black border 1px rounded-md border-slate-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or Phone number"
          className="p-2 my-2 py-3 w-full bg-black border 1px rounded-md border-slate-500"
        ></input>
        
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 py-3 w-full bg-black border 1px rounded-md border-slate-500"
        ></input>
        <button
          type="submit"
          className="p-2 my-2 bg-red-600 hover:bg-red-700 text-white w-full rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center">Forgot Password?</p>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
