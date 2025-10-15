import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
       <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Login</button>
              <div className="">
                <p className="flex justify-center space-x-1"><span>Didn't Have an Account?</span>  
                     <span><Link to='/login' className="text-blue-500 hover:underline hover:text-blue-600 font-medium"> Please Register</Link></span>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;