import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../components/Inputs";

const DataInput = () => {
  return (
    <>
      <main className="mb-10">
        <div className="mt-10 flex flex-col gap-3">
          <div className="w-[40%] mx-auto text-center">
            <h3 className="text-gray-700 font-semibold text3xl">
              Map the fields to Notion properties
            </h3>
            <p className="text-gray-500">
              Left side fields are the fields that are used to build the blog,
              and the right side ones are the notion properties
            </p>
          </div>

          <div className="w-[40%] mx-auto rounded-md bg-white shadow-md pb-3">
            <div className="border-b shadow-sm grid grid-cols-4">
              <div className="border-b-2 border-b-black text-center bg-gray-300 p-2">
                Content
              </div>
              <div className=" text-center p-2 ">Content</div>
              <div className=" p-2 text-center ">Content</div>
              <div className=" p-2 text-center ">Content</div>
            </div>
            <div className="flex justify-end pt-4 pr-3">
              <button className="bg-gray-900 py-1 px-1 text-white rounded-md">
                Reset this database
              </button>
            </div>
            <div className="px-6">
              <form>
                <Inputs />
              </form>
            </div>
          </div>

          <div className="w-[40%] mx-auto flex justify-end">
            <div className="flex space-x-3">
              <Link to="/create-blog">
                <button className="bg-gray-300 px-3 py-2 rounded-md text-gray-500">
                  Back
                </button>
              </Link>
              <Link>
                <button className="bg-gray-700 px-3 py-2 rounded-md text-white">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DataInput;
