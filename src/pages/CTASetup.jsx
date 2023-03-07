import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { BsToggleOn } from "react-icons/bs";

const CTASetup = () => {
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
                  CTA Button Setup
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                CTA Button Setup
              </h1>

              <form className="w-full">
                <div className="w-full border-b border-b-gray-300 pb-6">
                  <div className="w-full  lg:w-[85%] xl:w-[65%] flex flex-col space-y-5">
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h3 className=" font-semibold text-md">
                          CTA Button Setup
                        </h3>
                        <p className="text-sm text-gray-500">
                          Show CTA button after every blog post
                        </p>
                      </div>
                      <div>
                        <BsToggleOn className="text-gray-300 text-3xl" />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Heading
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      ></textarea>
                    </div>
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Sub Heading
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      ></textarea>
                    </div>
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        CTA Button Text
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      ></textarea>
                    </div>

                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Disclaimer in Header
                      </label>
                      <input
                        type="text"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
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

export default CTASetup;
