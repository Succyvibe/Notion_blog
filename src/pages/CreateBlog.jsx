import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  return (
    <>
      <main>
        <div className="text-center mt-10 flex flex-col gap-3 px-3">
          <h3 className="text-gray-700 font-semibold text-xl md:text-3xl">
            Create content with Notion
          </h3>
          <p className="text-gray-500 text-sm md:text-xl">
            Bring your own databases or duplicate our databases
          </p>

          <div className="w-full md:w-[90%] xl:w-[40%] mx-auto rounded-md bg-white shadow-md pt-8 pb-8 xl:pt-4 xl:pb-3">
            <div className="w-[80%] mx-auto mb-4">
              <p className="text-sm md:text-xl">
                Duplicate our{" "}
                <span className="font-semibold text-gray-700">
                  Content, Pages, Tags, and Authors
                </span>{" "}
                databases.
              </p>

              <div className="w-full xl:w-[50%] mx-auto mt-4 bg-gray-400 flex space-x-2 items-center justify-center rounded-md px-2 py-3">
                <button
                  type="file"
                  className="font-semibold text-sm md:text-xl"
                >
                  Duplicate Databases
                </button>
                <BsArrowUpRightSquare />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[90%] xl:w-[40%] mx-auto flex justify-end">
            <Link to="/create-blog-two">
              <button className="bg-gray-700 px-3 py-2 rounded-md text-white text-sm md:text-xl">
                Next
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateBlog;
