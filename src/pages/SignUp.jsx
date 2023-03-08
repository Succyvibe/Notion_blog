import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main>
      <div>
        <div className="text-center">
          <h1>Feather</h1>
          <p>Feather.so affilliates</p>
        </div>
        <form className="w-[25%] mx-auto mt-4 bg-white shadow-md px-6 py-8 flex flex-col space-y-4">
          <div className="border-b border-b-gray-300 pb-4 text-center ">
            <p className="text-xs">
              <span className="font-medium text-gray-900">
                Join Feather.so affilliates
              </span>
              and recieve a 25% commission on all payments for paying customers
              you refer to
              <Link className="underline text-gray-800">feather.so</Link>
            </p>
          </div>
          <div className="w-full">
            <label className="text-gray-800">First Name</label>
            <input
              type="text"
              placeholder="Luke"
              className="w-full border px-2 py-1 border-gray-400 bg-gray-300 rounded active:border-blue-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-800">Last Name</label>
            <input
              type="text"
              placeholder="Jatway"
              className="w-full border px-2 py-1 border-gray-400 bg-gray-300 rounded active:border-blue-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Jatway.com"
              className="w-full border px-2 py-1 border-gray-400 bg-gray-300 rounded active:border-blue-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-800">Password</label>
            <input
              type="password"
              placeholder="Jatway.com"
              className="w-full border px-2 py-1 border-gray-400 bg-gray-300 rounded active:border-blue-400"
            />
            <small className="text-gray-400">
              Minimum 8 characters ideally more
            </small>
          </div>
          <div className="w-full">
            <label className="text-gray-800">Confirm password</label>
            <input
              type="password"
              placeholder="Jatway.com"
              className="w-full border px-2 py-1 border-gray-400 bg-gray-300 rounded active:border-blue-400"
            />
          </div>

          <div className="w-full">
            <button className="w-full bg-blue-500 px-2 py-1.5 rounded text-white">
              Sign up
            </button>
            <div className="w-full text-center mt-4">
              <small className="text-gray-400">
                By signing up you agree to the{" "}
                <span className="text-[12px] text-blue-500">
                  Terms of Service
                </span>
              </small>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
