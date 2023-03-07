import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { BsToggleOn } from "react-icons/bs";

const Features = () => {
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
                  Features
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Feature Flags
              </h1>

              <div className="mt-4 flex flex-col gap-y-1 mb-4">
                <h3 className="font-semibold text-md">Features</h3>
                <p>Choose which features you want to enable on your blog</p>
              </div>

              <form className="w-full">
                <div className="w-full border-b border-b-gray-300 pb-6">
                  <div className="w-full  lg:w-[85%] xl:w-[65%] flex flex-col space-y-3">
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Posts per page
                        <span className="text-red-700 font-semibold ">*</span>
                      </label>
                      <input
                        type="number"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
                    </div>

                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Cusdia Comment APP ID
                      </label>
                      <input
                        type="number"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
                    </div>

                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Disqus Shortname
                      </label>
                      <input
                        type="number"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
                    </div>

                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Newsletter Webhook URL
                      </label>
                      <input
                        type="number"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
                    </div>
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Newsletter Webhook Bearer Token
                      </label>
                      <input
                        type="number"
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      />
                    </div>

                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Blog Theme
                        <span className="text-red-700 font-semibold ">*</span>
                      </label>

                      <select
                        name=""
                        id=""
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      >
                        <option value="id">Candy (Red)</option>
                        <option value="id">Candy (Red)</option>
                        <option value="id">Candy (Red)</option>
                        <option value="id">Candy (Red)</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="text-gray-900 font-semibold">
                        Blog Template
                        <span className="text-red-700 font-semibold ">*</span>
                      </label>

                      <select
                        name=""
                        id=""
                        className="border border-gray-400 w-full px-2 py-2 rounded-md text-sm"
                      >
                        <option value="id">SaaS Company</option>
                        <option value="id">Candy (Red)</option>
                        <option value="id">Candy (Red)</option>
                        <option value="id">Candy (Red)</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full  lg:w-[85%] xl:w-[65%]">
                    <div className="w-full">
                      <div className="grid grid-cols-2 gap-y-5 gap-x-20">
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Watermark?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show watermark on your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">Comments</h3>
                            <p className="text-sm text-gray-500">
                              Show Comments on your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Category Filters
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show Category Filters on your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Pagination
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable pagination for your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Show Sidebar for Posts
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show sidebar for all your internal pages
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">Indexing</h3>
                            <p className="text-sm text-gray-500">
                              Enable indexing for your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">Sitemap</h3>
                            <p className="text-sm text-gray-500">
                              Add a Sitemap link to the footer
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">RSS Feed</h3>
                            <p className="text-sm text-gray-500">
                              Add an RSS Feed link to the footer
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Dark Mode (coming soon)
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show Dark Mode option for your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Site Search
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show Site Search on your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Newsletter (Near Footer)
                            </h3>
                            <p className="text-sm text-gray-500">
                              SHow newsletter form just above the footer(Collect
                              emails from your visitors)
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Newsletter (Near Hearder)
                            </h3>
                            <p className="text-sm text-gray-500">
                              SHow newsletter form just below the hero
                              section(Collect emails from your visitors)
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              CTA Button
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show cta button at the end of every blog post?
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Better Typography
                            </h3>
                            <p className="text-sm text-gray-500">
                              Make the content look a little better
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Display Notion Properties
                            </h3>
                            <p className="text-sm text-gray-500">
                              Turn this on if you want to show page properties
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Reverse Posts Order
                            </h3>
                            <p className="text-sm text-gray-500">
                              Reverse the order of posts if the publish date is
                              same
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Database View Dropdown
                            </h3>
                            <p className="text-sm text-gray-500">
                              Show the dropdown to switch between different
                              database views
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Enable Image Zoom?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Should the image in the blog be zoomable?
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Make checkboxes interactive?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Should the checkboxes in the blog be made
                              interctive?
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Make all external links 'nofollow'
                            </h3>
                            <p className="text-sm text-gray-500">
                              Do you want all your external links to be nofollow
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Auto optimize all the images
                            </h3>
                            <p className="text-sm text-gray-500">
                              Do you want to enable auto image optimization
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Auto Generate Covers
                            </h3>
                            <p className="text-sm text-gray-500">
                              Do you want to auto-generate cover image if the
                              covers are not added
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Enable RTL
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you are using an RTL language
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Enable Subdirectory
                            </h3>
                            <p className="text-sm text-gray-500">
                              Do you want to use subdirectory for your blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Hide Content Index CTA?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you don't want to sow CTA section
                              in the content index page
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Hide Tags Index CTA?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you dont want to show CTA section
                              in the tags index page
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Hide Authors Index CTA?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you don't want to show CTA section
                              in the authors index page
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Featured Posts in Tag Page?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you want to have a featured posts
                              section in tag page
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Featured Posts in Author Page?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you want to have a featured posts
                              section in the author page
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className=" font-semibold text-md">
                              Enable API for the blog?
                            </h3>
                            <p className="text-sm text-gray-500">
                              Enable this if you want to have an API for your
                              blog
                            </p>
                          </div>
                          <div>
                            <BsToggleOn className="text-gray-300 text-3xl" />
                          </div>
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

export default Features;
