import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import BackBtnSm from "./BackBtnSm";
// import BtnSm from "./BtnSm";

const AddBlogCard = ({
  content,
  pages,
  tags,
  authors,
  heading,
  text,
  label,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="mt-10 flex flex-col gap-3">
        <div className="w-[90%] xl:w-[40%] mx-auto rounded-md bg-white shadow-md pb-3">
          <ul className="border-b shadow-sm grid grid-cols-4">
            <li
              className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                pathMatchRoute("/create-blog-two") &&
                "text-black border-b-2 text-semibold border-black"
              }`}
              onClick={() => navigate("/create-blog-two")}
            >
              {content}
            </li>
            <li
              className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                pathMatchRoute("/database-pages") &&
                "text-black border-b-2 text-semibold border-black"
              }`}
              onClick={() => navigate("/database-pages")}
            >
              {pages}
            </li>
            <li
              className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2  ${
                pathMatchRoute("/database-tags") &&
                "text-black border-b-2 text-semibold border-black"
              }`}
              onClick={() => navigate("/database-tags")}
            >
              {tags}
            </li>
            <li
              className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                pathMatchRoute("/database-author") &&
                "text-black border-b-2 text-semibold border-black"
              }`}
              onClick={() => navigate("/database-author")}
            >
              {authors}
            </li>
            {/* <div className=" text-center text-sm md:text-xl xl:text-lg  p-2">
              {content}
            </div> */}
            {/* <div className="text-sm xl:text-lg border-b-2 border-b-black text-center bg-gray-300 p-2 font-semibold">
              {pages}
            </div> */}
            {/* <div className="text-sm xl:text-lg p-2 text-center ">{tags}</div>
            <div className="text-sm xl:text-lg p-2 text-center ">{authors}</div> */}
          </ul>
          <div className="w-full">
            <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mt-8 rounded-full flex justify-center items-center bg-gray-300">
              <FiBookOpen />
            </div>
            <div className="px-3 lg:px-0 lg:w-[50%] xl:w-[65%] mx-auto mt-4 text-center">
              <h4 className="text-gray-700 font-semibold text-md md:text-xl xl:text-lg">
                {heading}
              </h4>
              <p className="text-gray-500 md:text-lg">{text}</p>
            </div>
            <div className="mt-16 md:mt-10 w-full  px-4 lg:w-[90%] mx-auto">
              <h4 className="text-md  md:text-md  font-semibold text-gray-600">
                {label} <span className="text-red-700">*</span>
              </h4>
              <form className="w-full  lg:flex  lg:space-x-5">
                <div className=" lg:w-[60%] rounded-md p-2 border border-gray-400">
                  <input
                    type="text"
                    className="w-full border-none outline-none "
                    placeholder="paste your URL "
                  />
                </div>
                <div className="lg:w-[35%] md:text-lg  bg-gray-400  rounded-md mt-3 lg:mt-0 p-2">
                  <Link to="/database-input" className="w-full">
                    <button type="submit" className="w-full ">
                      Connect database
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogCard;
