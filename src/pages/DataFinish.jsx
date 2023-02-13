import React from "react";
import { Link } from "react-router-dom";

import AddBlogCardHeader from "../components/AddBlogCardHeader";
import BackBtnSm from "../components/BackBtnSm";
import BtnSm from "../components/BtnSm";

const DataFinish = () => {
  return (
    <>
      <AddBlogCardHeader
        heading="You're all set to go"
        text="Choose a feather blog subdomain for your blog. Don't worry you can change and your own domain later"
      />

      <div className="w-[90%] xl:w-[40%] mx-auto rounded-md bg-white shadow-md pb-6">
        <div className="w-full">
          <div className="px-4 lg:w-[50%] xl:w-[90%] mx-auto mt-4 pt-3">
            <h4 className="text-gray-700 font-semibold text-md md:text-xl xl:text-sm">
              Make sure you enter only the first part of the subdomain
            </h4>
          </div>
          <div className="mt-16 md:mt-5 w-full  px-4 lg:w-[90%] mx-auto">
            <form className="w-full">
              <h4 className="text-md  md:text-md  font-semibold text-gray-600">
                Enter your blog's name<span className="text-red-700">*</span>
              </h4>
              <div className=" rounded-md p-2 border border-gray-400 mb-4">
                <input
                  type="text"
                  className="w-full border-none outline-none "
                  placeholder="i.e My personal blog "
                />
              </div>
              <h4 className="text-md  md:text-md  font-semibold text-gray-600">
                Choose your subdomain<span className="text-red-700">*</span>
              </h4>
              <div className=" rounded-md p-2 border border-gray-400 flex justify-between">
                <input
                  type="text"
                  className="w-[60%] border-none outline-none "
                  placeholder="i.e My personal blog "
                />
                <p className="text-gray-300">feather blog</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[90%] xl:w-[40%] mx-auto flex justify-end mt-3">
        <div className="flex space-x-3">
          <Link to="/database-author">
            <BackBtnSm />
          </Link>
          <Link to="/dashboard">
            <BtnSm text="finish" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataFinish;
