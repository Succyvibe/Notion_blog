import React from "react";
import { Link } from "react-router-dom";
// import { FiBookOpen } from "react-icons/fi";
// import { Link } from "react-router-dom";
import AddBlogCard from "../components/AddBlogCard";
import AddBlogCardHeader from "../components/AddBlogCardHeader";
import BackBtnSm from "../components/BackBtnSm";
import BtnSm from "../components/BtnSm";

const DataAuthors = () => {
  return (
    <>
      <main>
        <AddBlogCardHeader
          heading=" Map the fields to Notion properties"
          text="  Left side fields are the fields that are used to build the blog,
          and the right side ones are the notion properties."
        />
        <AddBlogCard
          content="Content"
          pages="Pages"
          tags="Tags"
          authors="Authors"
          heading=" Tags database is not connected."
          text=" Please enter the notion page URL of your Tags database.
          "
          label=" Tags Database URL (optional) "
          span="*"
        />

        <div className="w-[90%] xl:w-[40%] mx-auto flex justify-end mt-3">
          <div className="flex space-x-3">
            <Link to="/database-tags">
              <BackBtnSm />
            </Link>
            <Link to="/database-finish">
              <BtnSm text="Next" />
            </Link>
          </div>
        </div>
      </main>
      {/* <main>
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
              <div className=" text-center  p-2">Content</div>
              <div className="  text-center  p-2 ">Pages</div>
              <div className=" p-2 text-center ">Tags</div>
              <div className="border-b-2 border-b-black bg-gray-300 p-2 text-center ">
                Authors
              </div>
            </div>
            <div className="w-full">
              <div className="w-8 h-8 mx-auto mt-8 rounded-full flex justify-center items-center bg-gray-300">
                <FiBookOpen />
              </div>
              <div className="lg:w-[50%] mx-auto mt-4 text-center">
                <h4 className="text-gray-700 font-semibold text-lg">
                  Authors database is not connected.
                </h4>
                <p className="text-gray-500">
                  Please enter the notion page URL of your Authors database.
                </p>
              </div>
              <div className="mt-16 w-full px-8">
                <h5 className="text-md font-semibold text-gray-600">
                  Authors Database URL
                  <span className="text-red-700">*</span>
                </h5>
                <form className="w-full flex space-x-5">
                  <input
                    type="text"
                    className="w-[70%] rounded-md p-2 border border-gray-400"
                    placeholder="paste your URL "
                  />
                  <Link to="/database-input">
                    <button
                      type="submit"
                      className="flex-1 bg-gray-400 p-2 rounded-md"
                    >
                      Connect database
                    </button>
                  </Link>
                </form>
              </div>
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
      </main> */}
    </>
  );
};

export default DataAuthors;
