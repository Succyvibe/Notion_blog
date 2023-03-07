import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const Localization = () => {
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
                  Localization
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Localization
              </h1>
              <p>
                Override the default wording to match your brand or translate it
                into a different
              </p>

              <form className="w-full lg:w-[50%] mt-8">
                <div className="w-full border-b border-b-gray-300 pb-6">
                  <div className="w-full flex flex-col space-y-8 pb-6  mb-6">
                    {/* =======================Post============== */}
                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Content Database
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your content database settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Singular Name
                          </label>
                          <input
                            type="text"
                            placeholder="post"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Plural Name
                          </label>
                          <input
                            type="text"
                            placeholder="posts"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ==========Page========== */}
                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Page Database
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your pages database settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Singular Name
                          </label>
                          <input
                            type="text"
                            placeholder="page"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Plural Name
                          </label>
                          <input
                            type="text"
                            placeholder="pages"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ==============Tags========== */}
                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Tags Database
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your tags database settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Singular Name
                          </label>
                          <input
                            type="text"
                            placeholder="tag"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Plural Name
                          </label>
                          <input
                            type="text"
                            placeholder="tags"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ======================Authors============ */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Authors Database
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your authors database settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Singular Name
                          </label>
                          <input
                            type="text"
                            placeholder="author"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Plural Name
                          </label>
                          <input
                            type="text"
                            placeholder="authors"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ======================Blog index Page============ */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Blog Index Page
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your blog index page settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Featured posts
                          </label>
                          <input
                            type="text"
                            placeholder="author"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>
                    {/* ======================Tags============ */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Tags Index
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your tags index page settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Find all the tags
                          </label>
                          <input
                            type="text"
                            placeholder="Find all the tags"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Tags index page description
                          </label>
                          <input
                            type="text"
                            placeholder="In this page, you will see all the tags..."
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Number of post
                          </label>
                          <input
                            type="number"
                            placeholder="No. of post"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Sort by
                          </label>
                          <input
                            type="number"
                            placeholder="Sort by"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Title(A-Z)
                          </label>
                          <input
                            type="number"
                            placeholder=" Title(A-Z)"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Title(Z-A)
                          </label>
                          <input
                            type="number"
                            placeholder=" Title(Z-A)"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ======================Authors Index Page============ */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Authors Index Page
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your authors index page settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Find all the authors
                          </label>
                          <input
                            type="text"
                            placeholder=" Find all the authors"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Authors index page description
                          </label>
                          <input
                            type="text"
                            placeholder="In this page, you will see all the authors..."
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>

                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Name(A-Z)
                          </label>
                          <input
                            type="number"
                            placeholder=" Name(A-Z)"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Title(Z-A)
                          </label>
                          <input
                            type="number"
                            placeholder=" Title(Z-A)"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* ===========Blog Post Content Page======== */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Blog Post Content Page
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your blog post content page settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Table of Contents
                          </label>
                          <input
                            type="text"
                            placeholder=" Table of Contents"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Written by
                          </label>
                          <input
                            type="text"
                            placeholder="Written by"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>

                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Related posts
                          </label>
                          <input
                            type="number"
                            placeholder="   Related posts"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Title(Z-A)
                          </label>
                          <input
                            type="number"
                            placeholder=" Title(Z-A)"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* =======Search========= */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Search
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your Search settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Type
                          </label>
                          <input
                            type="text"
                            placeholder=" typeer-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            For Tags
                          </label>
                          <input
                            type="text"
                            placeholder=" For Tags"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>

                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            For Authors
                          </label>
                          <input
                            type="text"
                            placeholder="   For Authors"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            For Posts
                          </label>
                          <input
                            type="text"
                            placeholder=" For Posts"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Search
                          </label>
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
                    </div>

                    {/* =========Newsletter============ */}

                    <div className="w-full">
                      <div className=" mb-4">
                        <h4 className="text-md  md:text-md  font-semibold text-gray-900">
                          Newsletter
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your newsletter settings
                        </p>
                      </div>
                      <div className="grid grid-cols-1  gap-4">
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Enter your email address
                          </label>
                          <input
                            type="text"
                            placeholder=" Enter your email address"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                        <div className="space-y-2">
                          <label className=" text-gray-900 font-semibold">
                            Subscribe to newsletter
                          </label>
                          <input
                            type="text"
                            placeholder="Subscribe to newsletter"
                            className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                          />
                        </div>
                      </div>
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

export default Localization;
