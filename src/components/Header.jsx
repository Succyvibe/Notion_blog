import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  // IoClose,
  // IoMenuOutline,
  IoPersonCircle,
  IoAddOutline,
} from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <div className="bg-[#faf8fc] border-b shadow-md lg:sticky top-0 left-0 w-full z-50 h-full lg:h-[10vh]">
      {user ? (
        <header className="flex justify-between items-center p-3 container mx-auto">
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none border-gray-400 border"
              onClick={() => setNavbar(true)}
            >
              {/* {navbar ? <IoClose /> : <IoMenuOutline size={25} />} */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div>
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fbuild%2F_assets%2Flogo-full-W6NCDN3K.svg&optimizer=image"
              alt="logo"
              className="h-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <div
            className={`absolute top-0 left-0 h-full lg:static  w-full  ${
              navbar
                ? "flex items-center justify-center bg-white shadow-md"
                : "hidden lg:block"
            }`}
          >
            <button
              className="absolute top-10 right-5 p-2 text-gray-700 rounded-md outline-none border-gray-400 border lg:hidden"
              onClick={() => setNavbar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className=" items-center justify-center  lg:flex lg:space-x-6 md:space-y-0">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/all-sites") &&
                  "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/features")}
              >
                Features
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/showcase") &&
                  "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/docs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/testimonials")}
              >
                Testimonials
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/blogs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/showcase")}
              >
                Showcase
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/blogs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/blog")}
              >
                Blog
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/blogs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/changelog")}
              >
                Changelog
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer relative ">
            <p className="font-semibold text-black">Premium User</p>
            <div
              className="flex items-center p-2 border border-gray-200 rounded-md "
              onClick={() => setUser(!user)}
            >
              <IoPersonCircle size={25} className="text-gray-400" />
              <p className="hidden md:block">Solomoneseme...</p>
              <BiChevronDown className="hidden md:block" />
            </div>
            <div
              className={`absolute top-[47px] left-0 w-full rounded-lg bg-white shadow ${
                user ? "block" : "hidden"
              }`}
            >
              <div>
                <div className=" border-b border-gray-400 p-3">
                  <h6>Signed in as</h6>
                  <p>Solomoneseme@gmail.com</p>
                </div>
                <ul className="p-3 flex flex-col gap-y-3">
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Create new blog
                    </li>
                  </Link>
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Billings and Plans
                    </li>
                  </Link>
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Become our affiliate
                    </li>
                  </Link>
                </ul>
                <div className=" border-t border-gray-400 p-3">
                  <button className="flex items-center">
                    <span className="mr-2">
                      <IoAddOutline />
                    </span>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="flex justify-between items-center p-3 container mx-auto">
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none border-gray-400 border"
              onClick={() => setNavbar(true)}
            >
              {/* {navbar ? <IoClose /> : <IoMenuOutline size={25} />} */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div>
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fbuild%2F_assets%2Flogo-full-W6NCDN3K.svg&optimizer=image"
              alt="logo"
              className="h-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <div
            className={`absolute top-0 left-0 h-full lg:static  w-full  ${
              navbar
                ? "flex items-center justify-center bg-white shadow-md"
                : "hidden lg:block"
            }`}
          >
            <button
              className="absolute top-10 right-5 p-2 text-gray-700 rounded-md outline-none border-gray-400 border lg:hidden"
              onClick={() => setNavbar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className=" items-center justify-center  lg:flex lg:space-x-6 md:space-y-0">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/all-sites") &&
                  "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/all-sites")}
              >
                All Sites
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/showcase") &&
                  "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/showcase")}
              >
                Showcase
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/docs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/docs")}
              >
                Docs
              </li>

              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/blogs") && "text-black lg:border-b-red-500"
                }`}
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer relative ">
            <p className="font-semibold text-black">Premium User</p>
            <div
              className="flex items-center p-2 border border-gray-200 rounded-md "
              onClick={() => setUser(!user)}
            >
              <IoPersonCircle size={25} className="text-gray-400" />
              <p className="hidden md:block">Solomoneseme...</p>
              <BiChevronDown className="hidden md:block" />
            </div>
            <div
              className={`absolute top-[47px] left-0 w-full rounded-lg bg-white shadow ${
                user ? "block" : "hidden"
              }`}
            >
              <div>
                <div className=" border-b border-gray-400 p-3">
                  <h6>Signed in as</h6>
                  <p>Solomoneseme@gmail.com</p>
                </div>
                <ul className="p-3 flex flex-col gap-y-3">
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Create new blog
                    </li>
                  </Link>
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Billings and Plans
                    </li>
                  </Link>
                  <Link>
                    <li className="flex items-center ">
                      <span className="mr-2">
                        <IoAddOutline />
                      </span>
                      Become our affiliate
                    </li>
                  </Link>
                </ul>
                <div className=" border-t border-gray-400 p-3">
                  <button className="flex items-center">
                    <span className="mr-2">
                      <IoAddOutline />
                    </span>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
