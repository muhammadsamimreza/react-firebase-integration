
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return ( 
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                {/* email field */}
              <label className="label">Email</label>
              <input type="email" 
              className="input" 
              name="email"
              placeholder="Email" />
              {/* password field */}
              <label className="label">Password</label>
              <input type="password" 
              className="input" 
              name="password"
              placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
              <div className="">
                <p className="flex justify-center space-x-1"><span>Already Have an Account?</span>  
                     <span><Link to='/login' className="text-blue-500 hover:underline hover:text-blue-600 font-medium"> Please Login</Link></span>
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
