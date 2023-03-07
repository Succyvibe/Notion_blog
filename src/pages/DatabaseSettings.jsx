import React from "react";
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

import { FaTrafficLight } from "react-icons/fa";

const DatabaseSettings = () => {
  const location = useLocation();
  //   const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full">
          <div className="w-full h-full overflow-hidden  ">
            <section className="w-[90%] h-full py-12 mx-auto overflow-scroll scrollbar-hide ">
              <ul className="w-full flex space-x-4 items-center">
                <li
                  className={`  text-black ${
                    pathMatchRoute("/blogs") && "font-semibold"
                  }`}
                >
                  <RiHome6Line size={25} />
                </li>

                <FiChevronRight />
                <li
                  className={`  text-black ${
                    pathMatchRoute("/settings") && "font-semibold"
                  }`}
                >
                  Settings
                </li>
                <FiChevronRight />
                <li
                  className={`  text-black ${
                    pathMatchRoute("/general-settings") && "font-semibold"
                  }`}
                >
                  Database Settings
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Database Settings
              </h1>

              <div className="flex rounded-md space-x-3 mt-6 mb-5 bg-orange-200 after:border-l after:border-l-orange-300 p-2">
                <div className="flex space-x-2">
                  <FaTrafficLight />
                  <p className="text-orange-500">
                    You need to purchase and enable the sub-folder add-on in
                    order to use these settings{" "}
                    <Link path="#" className="underline font-semibold">
                      Get the action
                    </Link>
                  </p>
                </div>
              </div>

              <form className="w-full md:w-[50%] flex flex-col space-y-5">
                <div className="w-full">
                  <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 mb-4">
                    <div>
                      <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                        Sub Directory Blog
                      </h4>
                      <p className="text-sm text-gray-500">
                        If you want your blog to be at example.com/blog, then
                        the main domain is example.com and the sub directory is
                        blog
                      </p>
                    </div>
                  </div>
                  <div className="w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="space-y-3">
                      <label className=" text-gray-900 font-semibold">
                        Main
                      </label>
                      <input
                        type="text"
                        placeholder="example.com"
                        className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                      />
                    </div>
                    <div className="space-y-3">
                      <label className=" text-gray-900 font-semibold">
                        Sub Directory
                      </label>
                      <input
                        type="text"
                        placeholder="blog"
                        className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 mb-3">
                    <div>
                      <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                        Content Database
                      </h4>
                      <p className="text-sm text-gray-500">
                        Your content database setting
                      </p>
                    </div>
                  </div>
                  <div className="w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-4">
                    <div className="space-y-3">
                      <label className=" text-gray-900 font-semibold">
                        Slug prefix
                      </label>
                      <input
                        type="text"
                        placeholder="content"
                        className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 mb-3">
                    <div>
                      <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                        Pages Database
                      </h4>
                      <p className="text-sm text-gray-500">
                        Your pages database settings
                      </p>
                    </div>
                  </div>
                  <div className="w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-4">
                    <div className="space-y-3">
                      <label className=" text-gray-900 font-semibold">
                        Slug prefix
                      </label>
                      <input
                        type="text"
                        placeholder="pages"
                        className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 mb-3">
                    <div>
                      <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                        Internal Pages
                      </h4>
                      <p className="text-sm text-gray-500">
                        Your internal pages settings
                      </p>
                    </div>
                  </div>
                  <div className="w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-4">
                    <div className="space-y-3">
                      <label className=" text-gray-900 font-semibold">
                        Slug prefix
                      </label>
                      <input
                        type="text"
                        placeholder="pages"
                        className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                      />
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DatabaseSettings;
