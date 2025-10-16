import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* email field */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  placeholder="Email"
                />
              </div>
              {/* password field */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                />
                <span onClick={()=>setShow(!show)} className="absolute text-lg top-7 right-7 z-50 ">
                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} 
                   </span>
              </div>
              <button className="btn btn-bg mt-4">Register</button>
              <div className="">
                <p className="flex justify-center space-x-1">
                  <span>Already Have an Account?</span>
                  <span>
                    <Link
                      to="/login"
                      className="text-blue-500 hover:underline hover:text-blue-600 font-medium"
                    >
                      {" "}
                      Please Login
                    </Link>
                  </span>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
