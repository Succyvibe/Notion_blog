import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import commentImg from "../assets/img/comments.png";

const GeneralSettings = () => {
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
          <div className="w-full h-full overflow-hidden">
            <section className="w-[90%] h-full py-12 mx-auto overflow-scroll scrollbar-hide">
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
                  General
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl">
                General Settings
              </h1>

              <div className="flex flex-col lg:flex-row gap-16">
                {/* =========Right Layout== */}
                <div className="w-full lg:w-[60%]">
                  <div className="mt-2 md:mt-4 mb-3">
                    <h3 className="text-md font-semibold">
                      Meta title & description
                    </h3>
                    <p className="text-sm text-gray-400">
                      Your main page's meta title and descriptio for SEO
                    </p>
                  </div>
                  <form className="w-full flex flex-col gap-5">
                    {/* =========Meta title========= */}
                    <div className="w-full">
                      <label className="flex justify-between w-full">
                        <p className="text-[13px] font-semibold">Meta Title</p>
                        <p className="text-gray-400font-semibold text-[13px]">
                          65-70 characters
                        </p>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="2"
                        className="w-full border-none outline-none border border-gray-400 bg-white rounded-lg"
                      ></textarea>
                    </div>

                    {/* =====Meta Description========= */}
                    <div className="w-full">
                      <label className="flex justify-between">
                        <p className="text-[13px] font-semibold">
                          Meta Description
                        </p>
                        <p className="text-gray-300font-bold text-[13px]">
                          160 characters
                        </p>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        className="w-full  outline-none border border-gray-300 bg-white rounded-lg"
                      ></textarea>
                    </div>

                    {/*===============Tab title=========== */}

                    <div className="w-full">
                      <label htmlFor="" className="block">
                        Tab Title
                      </label>
                      <input
                        type="text"
                        className="w-full  outline-none bg-white border border-gray-300 rounded-lg p-2"
                      />
                    </div>

                    {/*===============HTML Lang =========== */}
                    <div className="w-full">
                      <label htmlFor="" className="block">
                        HTML Lang
                      </label>
                      <input
                        type="text"
                        placeholder="en"
                        className="w-full  outline-none bg-white border border-gray-300 rounded-lg p-2"
                      />
                    </div>

                    {/*===============Open Graph Locale =========== */}

                    <div className="w-full">
                      <label htmlFor="" className="block">
                        Open Graph Locale
                      </label>
                      <input
                        type="text"
                        placeholder="en_US"
                        className="w-full outline-none bg-white border border-gray-400 rounded-lg p-2"
                      />
                    </div>
                    {/*===============Publication Name =========== */}

                    <div className="w-full">
                      <label htmlFor="" className="block">
                        Publication Name
                      </label>
                      <input
                        type="text"
                        placeholder="en_US"
                        className="w-full outline-none bg-white border border-gray-300 rounded-lg p-2"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">
                        Social-sharing Image
                      </h4>
                      <p className="text-gray-400 text-[14px] mt-4">
                        Shown when sharing your link on social platforms, at
                        least 1200x628px
                      </p>
                      <div className="flex gap-4 mt-4">
                        <input type="file" className="text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Favicon</h4>
                      <p className="text-gray-400 text-[14px] mt-4">
                        Upload a PNG icon for browser tabs, at 60x60 px
                      </p>
                      <div className="flex gap-4 mt-4">
                        <input type="file" className="text-gray-400" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-bold text-lg">Site Keywords</h4>
                      <p className="text-gray-400 text-[14px] mt-4">
                        Write some comma-separated keywords related to your site
                        for search engines
                      </p>
                      <div className="w-full">
                        <label htmlFor="" className="block">
                          Keywords
                        </label>
                        <input
                          type="text"
                          className="w-full outline-none bg-white border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                    </div>

                    {/* =====================SOcial  Icons================ */}

                    <div className="">
                      <h4 className="font-bold text-lg">Social profiles</h4>
                      <p className="text-gray-400 text-[14px] mt-2">
                        Add other links to your profile
                      </p>

                      <div className="w-full">
                        {/* ===============Facebok  Link======== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2">
                          <BsFacebook size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>

                        {/* =================Twitter  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsTwitter size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                        {/* =================Instagram  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsInstagram size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                        {/* =================LinkedIn  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsLinkedin size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                        {/* =================Youtube  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsYoutube size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                        {/* =================Pinterest  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsPinterest size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                        {/* =================Tiktok  Link===== */}
                        <div className="w-full flex space-x-3 items-center bg-white border border-gray-300 rounded-lg p-2 mt-4">
                          <BsYoutube size={25} className="text-gray-500" />
                          <input
                            type="text"
                            className="flex-1 w-full outline-none border-none"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* ==========Right Layout==== */}
                <div className="w-full lg:w-[40%]">
                  <p className="text-lg font-semibold text-gray-300 mb-3">
                    Social Card preview
                  </p>
                  <div className="w-full md:w-[58%] rounded-lg  bg-white">
                    <div className="w-full h-[220px] md:h-[150px]">
                      <img
                        src={commentImg}
                        alt="user"
                        className="w-full h-full object-cover rounded-tr-lg"
                      />
                    </div>
                    <div className="w-full p-4">
                      <h4 className="text-[15px] font-semibold">
                        Insight and advice from our expert team
                      </h4>

                      <p className="text-[13px] text-gray-300">
                        Find out how the best marketing automation tips and
                        tricks work
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-300 mb-3">
                      Favicon
                    </p>
                    <div className="bg-white w-full md:w-[58%] rounded-lg border border-gray-200 h-[400px] mt-4"></div>
                  </div>
                </div>
              </div>

              <div className="w-full md:flex justify-end items-center mt-6 ">
                <div className="flex space-x-3">
                  <button className="bg-transparent px-4 py-2 rounded-md outline-none border border-gray-400 text-gray-500 font-bold">
                    Cancel
                  </button>
                  <button className="bg-gray-800 px-4 py-2 rounded-md text-gray-200 font-bold outline-none border-none">
                    Save Changes
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default GeneralSettings;
