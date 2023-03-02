import React from "react";
import {
  BsArrowRight,
  BsArrowUpRightSquare,
  BsThreeDots,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full">
          <div className="w-full h-full overflow-hidden">
            <section className="w-[90%] h-full py-4 mx-auto overflow-scroll scrollbar-hide">
              <div className="flex flex-col md:flex-row justify-between lg:items-center border-b-[2px] border-b-gray-200 pb-5">
                <div className="w-full flex flex-col lg:space-y-3 lg:mb-3">
                  <h1 className="font-bold text-md lg:text-3xl text-black">
                    Welcome Back!
                  </h1>
                  <p className="text-black/60 text-sm lg:text-md font-medium">
                    You are logged in as solomoneseme@gmail,con
                  </p>
                </div>
                <Link to="/blogs">
                  <div className="lg:w-40 flex space-x-2 items-center text-sm">
                    <p className="flex">Go to blog</p>
                    <BsArrowUpRightSquare className="" />
                  </div>
                </Link>
              </div>

              <section className="mt-5">
                <div className="flex flex-col md:space-y-3 mb-3">
                  <h2 className="font-bold text-md md:text-xl text-black">
                    Start creating content
                  </h2>
                  <p className="text-black/60 text-sm md:text-md font-medium">
                    Here are some quick links that you can use.
                  </p>
                </div>
                <div className="grid  lg:grid-cols-3 gap-3">
                  <div className="bg-white rounded-md p-4 border-[1px] border-gray-200 hover:shadow-lg cursor-pointer transition duration-200 ease-in-out">
                    <div className="flex space-x-3">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 flex justify-center items-center rounded-full bg-gray-200 hidden md:flex ">
                        <BsArrowUpRightSquare size={10} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm lg:text-lg">
                          Create a new post{" "}
                        </h4>
                        <p className="text-[12px] text-gray-400">
                          Dive into Notion editor and starting creating content
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-md p-4 border-[1px] border-gray-200 hover:shadow-lg cursor-pointer transition duration-200 ease-in-out">
                    <Link to="/general-settings">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <div className="w-8 h-8 lg:flex justify-center items-center rounded-full bg-gray-200  hidden md:flex">
                            <BsArrowUpRightSquare />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Add your blog details{" "}
                            </h4>
                            <p className="text-sm text-gray-400">
                              Add the details of your blog and upload favicon
                            </p>
                          </div>
                        </div>
                        <BsArrowRight />
                      </div>
                    </Link>
                  </div>

                  <div className="bg-white rounded-md p-4 border-[1px] border-gray-200 hover:shadow-lg cursor-pointer transition duration-200 ease-in-out">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 hidden md:flex ">
                        <BsArrowUpRightSquare />
                      </div>
                      <Link to="/navigation-settings">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Setup your blog navigation
                          </h4>
                          <p className="text-sm text-gray-400">
                            Add log and links to the navbar of your blog
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-md mt-4 flex justify-between">
                  <div>
                    <h4 className="font-bold text-md lg:text-xl text-black text-center lg:text-start">
                      Customize your site
                    </h4>
                    <div className="lg:w-[55%] my-3 lg:my-4">
                      <p className="text-sm lg:text-md text-gray-400 text-center lg:text-start">
                        Stand out from the crowd . Feather lets you customize
                        everything so you can create a blog that doesn't just
                        look the same as what everyone else has
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row  gap-3 lg:gap-5">
                      <button className="bg-gray-900 text-white p-2 rounded-md cursor-pointer">
                        Start customization
                      </button>
                      <button className="border border-gray-900 lg:border-none outline-none bg-transparent rounded-md p-2 lg:p-0">
                        I'll do it later
                      </button>
                    </div>
                  </div>
                  <FaTimes className="text-gray-300 font-light" />
                </div>
                {/* ====================================STATs============================= */}
                <div>
                  <div className="flex flex-col space-y-2 lg:space-y-3 mb-3 pt-10">
                    <h2 className="font-bold text-md lg:text-xl text-black">
                      Quick Stats
                    </h2>
                    <p className="text-black/60 text-sm lg:text-md font-medium">
                      Here are some quick links that you can use.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-4 w-full">
                    <div className="flex justify-between items-center">
                      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
                        <p className="text-black/60 mb-2 lg:mb-0 text-md md:text-lg font-semibold ">
                          Total sites
                        </p>
                        <div className="w-full flex justify-between items-center">
                          <h4 className="font-bold text-xl md:text-3xl text-black mb-3 lg:mb-0">
                            3
                          </h4>
                          <div className=" w-14 flex  items-center bg-red-200 px-2 rounded-md text-red-800 font-semibold">
                            <FiTrendingUp className="mr-1" />
                            0%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
                        <p className="text-black/60 mb-2 lg:mb-0 text-md md:text-lg font-semibold ">
                          Total Visitors
                        </p>
                        <div className="w-full flex justify-between items-center">
                          <h4 className="font-bold text-xl md:text-3xl text-black mb-3 lg:mb-0">
                            3
                          </h4>
                          <div className=" w-14 flex  items-center bg-red-200 px-2 rounded-md text-red-800 font-semibold">
                            <FiTrendingUp className="mr-1" />
                            0%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
                        <p className="text-black/60 mb-2 lg:mb-0 text-md md:text-lg font-semibold ">
                          Total page views
                        </p>
                        <div className="w-full flex justify-between items-center">
                          <h4 className="font-bold text-xl md:text-3xl text-black mb-3 lg:mb-0">
                            3
                          </h4>
                          <div className=" w-14 flex  items-center bg-red-200 px-2 rounded-md text-red-800 font-semibold">
                            <FiTrendingUp className="mr-1" />
                            0%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
                        <p className="text-black/60 mb-2 lg:mb-0 text-md md:text-lg font-semibold ">
                          Average time spent
                        </p>
                        <div className="w-full flex justify-between items-center">
                          <h4 className="font-bold text-xl md:text-3xl text-black mb-3 lg:mb-0">
                            3S
                          </h4>
                          <div className=" w-14 flex  items-center bg-red-200 px-2 rounded-md text-red-800 font-semibold">
                            <FiTrendingUp className="mr-1" />
                            0%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
                        <p className="text-black/60 mb-2 lg:mb-0 text-md md:text-lg font-semibold ">
                          Bounce rate
                        </p>
                        <div className="w-full flex justify-between items-center">
                          <h4 className="font-bold text-xl md:text-3xl text-black mb-3 lg:mb-0">
                            0%
                          </h4>
                          <div className=" w-14 flex  items-center bg-red-200 px-2 rounded-md text-red-800 font-semibold">
                            <FiTrendingUp className="mr-1" />
                            0%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =======================RECENT================== */}
                <div>
                  <div className="md:flex justify-between items-center mt-5  md:gap-0 mb-3">
                    <div>
                      <h4 className="font-bold text-md md:text-xl text-black">
                        Recent posts
                      </h4>
                      <p className="text-gray-500 text-sm md:text-md">
                        Here are some of the recent posts
                      </p>
                    </div>
                    <Link to="/posts">
                      <button className="w-full flex justify-center md:justify-start mt-3 md:mt-0 border text-center px-2 py-1 border-gray-300 rounded-md items-center mr-3">
                        <p> View all</p>
                        <span className="pl-2">
                          <BsArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="overflow-hidden w-full border border-gray-400 rounded-md bg-white">
                    <div className="border-b border-b-gray-400">
                      <div className="flex px-3">
                        <p className="text-gray-500 text-sm font-bold uppercase">
                          Post title
                        </p>
                        <div className="flex-1">
                          <div className=" flex justify-center w-full">
                            <div className="flex justify-end space-x-24 w-full mr-40">
                              <p className="text-gray-500 font-bold uppercase">
                                Status
                              </p>
                              <p className="text-gray-500 font-bold uppercase">
                                Publish date
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-60 overflow-scroll">
                      <div className="bg-white  hover:bg-gray-200 border-t border-t-gray-400">
                        <div className="">
                          <div className="flex px-3 py-2">
                            <div>
                              <h5 className="font-semibold">
                                How to love for real
                              </h5>
                              <p className="text-gray-500">/how-to-love</p>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-center w-full">
                                <div className="flex justify-end space-x-24 w-full mr-[30px]">
                                  <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold">
                                    Published
                                  </div>
                                  <p className="text-gray-400 font-semibold">
                                    28 Jan 2023
                                  </p>
                                  <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                    <BsThreeDots />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white hover:bg-gray-200 border-t border-t-gray-400">
                        <div className="">
                          <div className="flex px-3 py-2">
                            <div>
                              <h5 className="font-semibold capitalize">
                                6 Ways Email & SMS are changing the customer
                                experience
                              </h5>
                              <p className="text-gray-500">
                                /6-ways-email-sms-are-changing-the-customer-experience
                              </p>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-center w-full">
                                <div className="flex justify-end space-x-24 w-full mr-[30px]">
                                  <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold">
                                    Published
                                  </div>
                                  <p className="text-gray-400 font-semibold">
                                    28 Jan 2023
                                  </p>
                                  <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                    <BsThreeDots />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white hover:bg-gray-200 border-t border-t-gray-400">
                        <div className="">
                          <div className="flex px-3 py-2">
                            <div>
                              <h5 className="font-semibold capitalize">
                                6 Ways Email & SMS are changing the customer
                                experience
                              </h5>
                              <p className="text-gray-500">
                                /6-ways-email-sms-are-changing-the-customer-experience
                              </p>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-center w-full">
                                <div className="flex justify-end space-x-24 w-full mr-[30px]">
                                  <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold">
                                    Published
                                  </div>
                                  <p className="text-gray-400 font-semibold">
                                    28 Jan 2023
                                  </p>
                                  <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                    <BsThreeDots />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white hover:bg-gray-200 border-t border-t-gray-400">
                        <div className="">
                          <div className="flex px-3 py-2">
                            <div>
                              <h5 className="font-semibold capitalize">
                                6 Ways Email & SMS are changing the customer
                                experience
                              </h5>
                              <p className="text-gray-500">
                                /6-ways-email-sms-are-changing-the-customer-experience
                              </p>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-center w-full">
                                <div className="flex justify-end space-x-24 w-full mr-[30px]">
                                  <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold">
                                    Published
                                  </div>
                                  <p className="text-gray-400 font-semibold">
                                    28 Jan 2023
                                  </p>
                                  <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                    <BsThreeDots />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
