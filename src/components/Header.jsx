import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
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
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/showcase") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/showcase")}
            >
              Showcase
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/docs") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/docs")}
            >
              Docs
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/blogs") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/blogs")}
            >
              Blogs
            </li>
          </ul>
        </div>

        <div className="flex">
          <p>Premium User</p>
          <div className="flex">
            <CgProfile />
            <p>Solomoneseme...</p>
            <BiChevronDown />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
