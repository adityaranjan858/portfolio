import React, { useState } from "react";
import Button from "../utils/Button";
import { useNavigate } from 'react-router';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import Navbar from "../components/Navbar";
const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
    firebase: "",
  });

  const navigate = useNavigate();

  const validation = (value) => {
    let valid = true;
    let errors = {};
    if (value.email === "") {
      errors.email = "Email is required";
      valid = false;
    }
    if (value.password === "") {
      errors.password = "Password is required";
      valid = false;
    }
    setErrorMsg({ ...errorMsg, ...errors });
    return valid;
  };

  const inputHandler = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
    setErrorMsg({ ...errorMsg, [e.target.name]: "" });
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    const value = { ...signIn, 
        email : signIn.email.trim(),
        password : signIn.password.trim()
    };
    if (!validation(value)) return;
    
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log("signed in");
      setErrorMsg({ ...errorMsg, firebase: "" });
      navigate("/admin");

    } catch (error) {
      setErrorMsg({ ...errorMsg, firebase: "Invalid email or password"  });
      console.log("sign in error :", error.message);
    }
  };

  return (
    <>
    <Navbar />
      <section className="flex justify-center items-center mt-20">
        <div className=" flex flex-col space-y-4 justify-center items-center py-12 px-8 shadow-lg bg-gray-800 w-full sm:w-7/12 md:w-5/12 lg:w-4/12">
          <h1 className="text-3xl font-bold mb-10">Sign In</h1>
          <form onSubmit={signInHandler} className="w-full">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-left">
                  Email
                </label>
                <input
                id="email"
                  className="border border-gray-600 rounded-lg p-2 focus:outline-none focus:border-primary"
                  type="email"
                  placeholder="email"
                  name="email"
                  value={signIn.email}
                  onChange={inputHandler}
                />
                {errorMsg.email && (
                  <p className="text-red-500 text-sm">{errorMsg.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-left" htmlFor="password">
                  Password
                </label>
                <input
                id="password"
                  className="border border-gray-600 rounded-lg p-2 focus:outline-none focus:border-primary"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={signIn.password}
                  onChange={inputHandler}
                />
                {errorMsg.password && (
                  <p className="text-red-500 text-sm">{errorMsg.password}</p>
                )}
              </div>
              {errorMsg.firebase && <p className="text-red-500 text-sm">{errorMsg.firebase}</p>}

              <Button type="submit">SignIn</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
