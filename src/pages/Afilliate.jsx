import React from "react";
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { BsToggleOn } from "react-icons/bs";

const Afilliate = () => {
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
                  Affilliate Watermark
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Affilliate Watermark Settings
              </h1>

              <div className="mt-4 flex flex-col gap-y-1">
                <h3 className="font-semibold text-md">Watermark Settings</h3>
                <p>Love Feather? Not an affilliate yet?</p>
                <Link className="underline">
                  Bocome an affilliate and earn 20% recurring revenue for every
                  person you refer
                </Link>
              </div>

              <div className="w-full mt-4">
                <label className=" w-full">
                  <p className="text-[13px] font-semibold">Affilliate Slug</p>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 rounded "
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className=" font-semibold text-md">Show Watermark?</h3>
                  <p className="text-sm text-gray-500">
                    Should the watermark be shown?
                  </p>
                </div>
                <BsToggleOn className="text-gray-300 text-3xl" />
              </div>
              <div className="flex justify-between items-center border-b border-b-gray-300 pb-4 mt-4">
                <div>
                  <h3 className=" font-semibold text-md">Show Watermark?</h3>
                  <p className="text-sm text-gray-500">
                    Should the watermark be shown?
                  </p>
                </div>
                <BsToggleOn className="text-gray-300 text-3xl" />
              </div>

              <div className="flex justify-end space-x-3 mt-2">
                <button className="px-3 py-1.5 bg-transparent border border-gray-600 rounded ">
                  Cancel
                </button>
                <button className="px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                  Save Changes
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Afilliate;
