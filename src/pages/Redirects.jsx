import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Redirects = () => {
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
                  Redirects
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Redirects
              </h1>
              <p>
                Redirect old URLS to new ones so that you don't lose your search
                engine rankings. You can redirect from one of the feather paths
                to a different path or to a completely different domain
              </p>

              <form className="w-full mt-8">
                <div className="w-full border-b border-b-gray-300 pb-6">
                  <div className="flex flex-col lg:items-center lg:flex-row  space-y-4 lg:space-y-0 lg:space-x-2">
                    <div className="w-full lg:flex-1">
                      <div className="w-full">
                        <label className="text-gray-900 font-semibold">
                          Old path
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                          placeholder="/from"
                        />
                      </div>
                    </div>
                    <div className="flex items-center pt-4">
                      <FaArrowRight />
                    </div>

                    <div className="w-full lg:flex-1">
                      <div className="w-full">
                        <label className="text-gray-900 font-semibold">
                          Redirect path
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                          placeholder="/to or https://example.com/path"
                        />
                      </div>
                    </div>

                    <div className="w-[40%] lg:w-[13%] pt-6">
                      <button className="w-full  flex items-center justify-center px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                        <MdAdd />
                        Add Redirects
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button className="px-3 py-1.5 bg-transparent border border-gray-600 rounded ">
                    Cancel
                  </button>
                  <button className="px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                    Save Changes
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Redirects;
