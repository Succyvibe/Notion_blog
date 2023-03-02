import React from "react";
import { BsToggleOn } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { RiHome6Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import CopyRight from "../components/SettingsComponent/CopyRight";
import Sidebar from "../components/Sidebar";

const AddLinks = () => {
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
                  Add Link
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl">Add New Link</h1>

              <div className="flex flex-col lg:flex-row gap-16 border-b border-b-gray-700 pb-10 mb-6">
                {/* =========Right Layout== */}
                <div className="w-full lg:w-[60%]">
                  <div className="mt-2 md:mt-4 mb-3">
                    <h3 className="text-md font-semibold">
                      Header Link details
                    </h3>
                    <p className="text-sm text-gray-400">
                      Add a link for easy navigation
                    </p>
                  </div>
                  <form className="w-full flex flex-col gap-5">
                    {/* =========Logo text========= */}
                    <div className="w-full mt-6">
                      <label className=" w-full">
                        <p className="text-[13px] font-semibold">
                          Name <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 rounded "
                      />
                    </div>
                    {/* =========Logo Image========= */}
                    <div className="w-full mt-2">
                      <label className=" w-full">
                        <p className="text-[13px] font-semibold">
                          Short Description{" "}
                          <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 rounded "
                      >
                        <option value="">file</option>
                      </select>
                    </div>
                    {/* =========Logo Image========= */}
                    <div className="w-full mt-2">
                      <label className=" w-full">
                        <p className="text-[13px] font-semibold">
                          Short Description{" "}
                          <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full border border-gray-300 outline-none bg-white px-3 py-1.5 text-gray-800 rounded "
                      >
                        <option value="">file</option>
                      </select>
                    </div>
                    {/* ==============Hide Logo text===== */}
                    <div className="flex justify-between w-full items-center">
                      <div>
                        <h5 className="text-xl font-semibold">CTA Button</h5>
                        <p className="text-sm text-gray-500">
                          Is this a main call to action button?
                        </p>
                      </div>
                      <BsToggleOn className="text-gray-300 text-3xl" />
                    </div>
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
      <CopyRight />
    </>
  );
};

export default AddLinks;
