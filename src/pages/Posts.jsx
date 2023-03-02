import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";
import Sidebar from "../components/Sidebar";

const Posts = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full">
          <div className="w-full h-full">
            <section className="w-[90%] h-full py-4 mx-auto">
              <div className="flex justify-between">
                <h3 className="font-bold w-[30%] text-md md:text-xl text-black">
                  Posts
                </h3>
                <div className="flex-1 hidden">
                  <ul className="w-full grid grid-cols-5">
                    <li className="relative flex items-center font-semibold">
                      <p> All posts</p>
                      <FaChevronDown
                        onClick={() => setDropDown((prevState) => !prevState)}
                        className="cursor-pointer ml-3 text-gray-600"
                      />
                      {dropDown ? (
                        <ul className="bg-white px-4 py-2 rounded-md absolute top-7 left-0 w-[180px] flex flex-col items-center">
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                        </ul>
                      ) : null}
                    </li>
                    <li className="relative flex items-center font-semibold">
                      All authors
                      <FaChevronDown
                        onClick={() => setDropDown((prevState) => !prevState)}
                        className="cursor-pointer ml-3 text-gray-600"
                      />
                      {dropDown ? (
                        <ul className="bg-white px-4 py-2 rounded-md absolute top-7 left-0 w-[180px] flex flex-col items-center">
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                        </ul>
                      ) : null}
                    </li>
                    <li className="relative flex items-center font-semibold">
                      All tags
                      <FaChevronDown
                        onClick={() => setDropDown((prevState) => !prevState)}
                        className="cursor-pointer ml-3 text-gray-600"
                      />
                      {dropDown ? (
                        <ul className="bg-white px-4 py-2 rounded-md absolute top-7 left-0 w-[180px] flex flex-col items-center">
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                        </ul>
                      ) : null}
                    </li>
                    <li className="relative flex items-center font-semibold">
                      <p> Sort by: Newest</p>
                      <FaChevronDown
                        onClick={() => setDropDown((prevState) => !prevState)}
                        className="cursor-pointer ml-3 text-gray-600"
                      />
                      {dropDown ? (
                        <ul className="bg-white px-4 py-2 rounded-md absolute top-7 left-0 w-[180px] flex flex-col items-center">
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                          <li>How to Love</li>
                        </ul>
                      ) : null}
                    </li>
                    <button className="w-full bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 rounded-md font-semibold">
                      <GrFormAdd className=" text-white" />
                      <p>Create new post</p>
                    </button>
                  </ul>
                </div>
              </div>

              <section className="mt-5">
                {/* =======================RECENT================== */}
                <div>
                  <div className="overflow-hidden w-full border border-gray-400 rounded-md bg-white">
                    <div className="px-3 py-2">
                      <p>All Posts</p>
                      <p>List of all articles.</p>
                    </div>
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

export default Posts;
