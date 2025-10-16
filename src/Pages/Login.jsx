import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignOut = (e) => {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      toast.warn("🦄 Sign Out Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setUser(null)
    })
    .catch((error) => {
      toast.error(`🦄 ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
};


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">{user ? "" : "LogIn"}</h1>
          <form onSubmit={handlelogin}>
            {user ? (
              <div className="flex flex-col justify-center text-center space-y-3">
                <img
                  src={
                    user?.photoURL || "https://i.ibb.co.com/jkFSjQKN/alarn.png"
                  }
                  alt="photo"
                  className="w-20 h-20 rounded-full mx-auto border-white"
                />
                <h2 className="text-xl">{user?.DisplayName}</h2>
                <h2 className="text-lg text-green-500">{user?.email}</h2>
                <button
                  onClick={handleSignOut}
                  className="btn btn-neutral mt-4"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <fieldset className="fieldset">
                {/* Emails */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute text-lg top-7 right-7 z-50 "
                  >
                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <div className="">
                  <p className="flex justify-center space-x-1">
                    <span>Didn't Have an Account?</span>
                    <span>
                      <Link
                        to="/login"
                        className="text-blue-500 hover:underline hover:text-blue-600 font-medium"
                      >
                        {" "}
                        Please Register
                      </Link>
                    </span>
                  </p>
                </div>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
