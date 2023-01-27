import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-[#faf8fc] border-b shadow-md sticky top-0 left-0 w-full z-50">
      <header className="flex justify-between items-center p-3 container mx-auto">
        {/* <IoMenuOutline/> */}
        <div>
          <img
            src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fbuild%2F_assets%2Flogo-full-W6NCDN3K.svg&optimizer=image"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="md:flex space-x-10 hidden ">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/all-sites") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/all-sites")}
            >
              All Sites
            </li>

            <li
              className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/showcase") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/showcase")}
            >
              Showcase
            </li>

            <li
              className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/docs") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/docs")}
            >
              Docs
            </li>

            <li
              className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/blogs") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/blogs")}
            >
              Blogs
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <p className="font-semibold text-black">Premium User</p>
          <div className="flex items-center p-2 border border-gray-200 rounded-md">
            <IoPersonCircle size={25} className="text-gray-400" />
            <p className="hidden md:block">Solomoneseme...</p>
            <BiChevronDown className="hidden md:block" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
