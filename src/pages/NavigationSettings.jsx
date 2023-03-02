import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiDeleteBin5Line, RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import {
  BsArrowDownSquareFill,
  BsArrowUpSquareFill,
  BsToggleOn,
} from "react-icons/bs";

import { CgArrowBottomLeft } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";

const NavigationSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
                  Navigation
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl">
                Navigation Settings
              </h1>

              <div className="flex flex-col lg:flex-row gap-16 border-b border-b-gray-700 pb-10 mb-6">
                {/* =========Right Layout== */}
                <div className="w-full lg:w-[60%]">
                  <div className="mt-2 md:mt-4 mb-3">
                    <h3 className="text-md font-semibold">Logo</h3>
                    <p className="text-sm text-gray-400">
                      Set a little or upload an image
                    </p>
                  </div>
                  <form className="w-full flex flex-col gap-5">
                    {/* =========Logo text========= */}
                    <div className="w-full mt-6">
                      <label className=" w-full">
                        <p className="text-[13px] font-semibold">Logo Text</p>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 rounded "
                      />
                    </div>
                    {/* =========Logo Image========= */}
                    <div className="w-full mt-2">
                      <label className=" w-full">
                        <p className="text-[13px] font-semibold">Logo Image</p>
                      </label>
                      <div className="w-full flex justify-between items-center">
                        <input type="file" />
                        <p className="text-gray-600">Not Uploaded!</p>
                      </div>
                    </div>
                    {/* =========Logo link========= */}
                    <div className="w-full mt-2">
                      <label className=" w-full flex justify-between items-center">
                        <p className="text-[13px] font-semibold">Logo Link</p>
                        <p>where to go to when you click on the logo?</p>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 "
                      />
                    </div>
                    {/* ==============Hide Logo text===== */}
                    <div className="flex justify-between w-full items-center">
                      <div>
                        <h5 className="text-xl font-semibold">
                          Hide Logo Text
                        </h5>
                        <p className="text-sm text-gray-500">
                          Do you want to hide the text when showing logo?
                        </p>
                      </div>
                      <BsToggleOn className="text-gray-300 text-3xl" />
                    </div>
                    {/* ==============Hide Logo Image===== */}
                    <div className="flex justify-between w-full items-center">
                      <div>
                        <h5 className="text-xl font-semibold">
                          Hide Logo Image
                        </h5>
                        <p className="text-sm text-gray-500">
                          Do you want to hide the image when showing logo?
                        </p>
                      </div>
                      <BsToggleOn className="text-gray-300 text-3xl" />
                    </div>

                    <div className="mt-2 md:mt-4 mb-2">
                      <h3 className="text-md font-semibold">Links</h3>
                      <p className="text-sm text-gray-400">
                        Links can either be a Notion Page or an external link
                      </p>
                    </div>

                    <div className="w-full bg-white rounded">
                      <div className="border-b border-b-gray-300 p-3 bg-white hover:bg-gray-400">
                        <div className=" w-full flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <BsArrowDownSquareFill className="text-gray-400" />
                            <BsArrowUpSquareFill className="text-gray-400" />
                            <p className="text-black font-semibold">
                              Blog Home
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-300 text-gray-600  rounded-sm px-1">
                              GENERATED_PAGE
                            </div>
                            <CgArrowBottomLeft className="text-gray-400" />
                            <RiDeleteBin5Line className="text-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-b-gray-300 p-3 bg-white hover:bg-gray-400">
                        <div className=" w-full flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <BsArrowDownSquareFill className="text-gray-400" />
                            <BsArrowUpSquareFill className="text-gray-400" />
                            <p className="text-black font-semibold">
                              Some Link
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-300 text-gray-600  rounded-sm px-1">
                              EXTERNAL_LINK
                            </div>
                            <CgArrowBottomLeft className="text-gray-400" />
                            <RiDeleteBin5Line className="text-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-b-gray-300 p-3 bg-white hover:bg-gray-400">
                        <div className=" w-full flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <BsArrowDownSquareFill className="text-gray-400" />
                            <BsArrowUpSquareFill className="text-gray-400" />
                            <p className="text-black font-semibold capitalize">
                              Some other Link
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-300 text-gray-600  rounded-sm px-1 uppercase">
                              External_link
                            </div>
                            <CgArrowBottomLeft className="text-gray-400" />
                            <RiDeleteBin5Line className="text-red-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-gray-300 px-4 py-2 flex items-center space-x-3 w-full md:w-[20%] rounded-md">
                      <GrFormAdd /> Add new link
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
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

export default NavigationSettings;
