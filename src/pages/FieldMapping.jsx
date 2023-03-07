import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const FieldMapping = () => {
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
                  FieldMapping
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                FieldMapping
              </h1>

              <form className="w-full md:w-[70%]  rounded-md bg-white shadow-md pb-3 mt-8">
                <ul className="border-b shadow-sm grid grid-cols-4">
                  <li
                    className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                      pathMatchRoute("/create-blog-two") &&
                      "text-black border-b-2 text-semibold border-black"
                    }`}
                    onClick={() => navigate("/create-blog-two")}
                  >
                    Content
                  </li>
                  <li
                    className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                      pathMatchRoute("/database-pages") &&
                      "text-black border-b-2 text-semibold border-black"
                    }`}
                    onClick={() => navigate("/database-pages")}
                  >
                    Pages
                  </li>
                  <li
                    className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2  ${
                      pathMatchRoute("/database-tags") &&
                      "text-black border-b-2 text-semibold border-black"
                    }`}
                    onClick={() => navigate("/database-tags")}
                  >
                    Tags
                  </li>
                  <li
                    className={`cursor-pointer  text-center text-sm md:text-xl xl:text-lg  p-2 ${
                      pathMatchRoute("/database-author") &&
                      "text-black border-b-2 text-semibold border-black"
                    }`}
                    onClick={() => navigate("/database-author")}
                  >
                    Authors
                  </li>
                </ul>
                <div className="px-4">
                  <div className="flex justify-end space-x-3 mt-6">
                    <button className="px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                      Reset this database
                    </button>
                  </div>

                  <div className="w-full flex flex-col space-y-4 pb-6 border-b border-b-gray-400 mb-6">
                    <p className="text-gray-400 font-semibold ">
                      These are the least required fields to get you started
                    </p>
                    {/* =======================ID============== */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Id <span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Unique identifier for the post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Id"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>
                    {/* =======================Title============== */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Title<span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Unique identifier for the post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Name"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>

                    {/* =======================Publish Date============= */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Publish Date<span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Unique identifier for the post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Publish Date"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>
                  </div>

                  {/* ==================Additional Settings=============== */}
                  <div className="w-full flex flex-col space-y-4 pb-6 border-b border-b-gray-400 mb-6">
                    <p className="text-gray-400 font-semibold ">
                      Additional fields are always good to add.
                    </p>
                    {/* =======================Slug============== */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Slug <span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Slug of the post. Will be automatically generated from
                          title if empty
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Slug"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>
                    {/* =======================Excerpt============== */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Excerpt <span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Short excerpt of the blog post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Excerpt"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>

                    {/* =======================Tags============= */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Tags<span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Tags associated with the post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Tags"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
                    </div>
                    {/* =======================Related post============= */}
                    <div className="w-full grid grid-cols-2">
                      <div>
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Related Posts<span className="text-red-700">*</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Posts related to the given post
                        </p>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Related Posts"
                          className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                        />
                      </div>
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

export default FieldMapping;
