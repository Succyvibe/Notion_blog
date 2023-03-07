import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

import { FaVoicemail } from "react-icons/fa";

const EmailNewsletter = () => {
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
                  Email Newsletter
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Email Newsletter
              </h1>

              <div className="flex justify-end space-x-3 mt-6">
                <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                  <FaVoicemail className="text-white" />
                  Export CSV
                </button>
              </div>
              <div className="shadow-md mt-4 border border-gray-300 rounded-md">
                <div className=" w-full md:w-[75%] flex justify-between items-center px-3 py-1.5">
                  <p>Email address</p>
                  <p>Created At</p>
                  <p>Updated At</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default EmailNewsletter;
