import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import { FaChevronDown, FaShare } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import BackBtnSm from "../components/BackBtnSm";
import BtnSm from "../components/BtnSm";
import Sidebar from "../components/Sidebar";

const Tags = () => {
  const onToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  const onToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  const [dropDown, setDropDown] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <>
      {toggleModal ? (
        <div className="bg-black/60 absolute top-0 left-0 h-screen w-full z-20 ">
          <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white w-[30%] mx-auto p-3 rounded-md">
              <div>
                <h5 className="font-semibold">Setup Hero Block</h5>
                <p className="text-gray-400 text-sm">
                  This block will show up at the top of the articles list page
                </p>
              </div>

              <div className="w-full  ">
                <h4 className="text-md  md:text-md  font-semibold text-gray-600">
                  Notion Page URL <span className="text-red-700">*</span>
                </h4>
                <form className="w-full ">
                  <div className="w-full  rounded-md p-2 border border-gray-400">
                    <input
                      type="text"
                      className="w-full border-none outline-none "
                      placeholder="Enter URL "
                    />
                  </div>
                </form>
                <div className="w-full flex justify-end mt-3">
                  <div className="flex space-x-3">
                    <Link to="/create-blog-two">
                      <BackBtnSm />
                    </Link>
                    <Link to="/database-tags">
                      <BtnSm text="Confirm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg w-10 h-10 absolute top-28 right-8 flex justify-center cursor-pointer items-center transition ease-in-out duration-150"
            onClick={onToggleModal}
          >
            <h3 className="text-red-700 text-xl font-semibold">x</h3>
          </div>
        </div>
      ) : null}

      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full overflow-scroll">
          <div className="w-full h-full">
            <section className="w-[90%] h-full py-4 mx-auto ">
              <div className="flex justify-between items-center">
                <h3 className="font-bold  text-md md:text-xl text-black">
                  Tags
                </h3>
                <div className="md:flex-1 ">
                  <div className="w-full flex justify-end items-center">
                    <div className="relative w-[150px] flex items-center font-semibold mr-4">
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
                    </div>
                  </div>
                </div>
                <button className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 rounded-md font-semibold">
                  <GrFormAdd className=" text-white" />
                  <p>Create new tag</p>
                </button>
              </div>

              <section className="mt-5">
                {/* ============================Generated Page================= */}
                <div>
                  <div className="overflow-hidden w-full border border-gray-400 rounded-md bg-white">
                    <div className="px-3 py-2">
                      <p className="font-bold">All Tags</p>
                      <p>List of all tags</p>
                    </div>
                    <div className="border-b border-b-gray-400">
                      <div className="grid grid-cols-2 items-center px-3 bg-slate-300">
                        <div>
                          <p className="text-gray-500 text-sm font-bold uppercase">
                            Tag Name
                          </p>
                        </div>
                        <div className="">
                          <div className=" flex space-x-20 w-full">
                            <p className="text-gray-500 font-bold uppercase">
                              Status
                            </p>
                            <p className="text-gray-500 font-bold uppercase">
                              LAST EDITED ON
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-h-[450px] overflow-scroll">
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
                                <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                  <BsThreeDots />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
                                <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                  <BsThreeDots />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
                                <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                  <BsThreeDots />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
                                <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                  <BsThreeDots />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer relative">
                                <div
                                  className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400"
                                  onClick={onToggleIcon}
                                >
                                  <BsThreeDots />
                                </div>
                                {toggleIcon ? (
                                  <div className="absolute -bottom-20 left-10 bg-white w-48 flex flex-col space-y-4 p-2 rounded-md shadow-md ">
                                    <div
                                      className="flex w-full items-center
                                    space-x-2 hover:bg-gray-300 transition duration-150 ease-in-out"
                                    >
                                      <FaShare size={10} />
                                      <p>Live Preview</p>
                                    </div>
                                    <div
                                      className="flex w-full items-center
                                    space-x-2 hover:bg-gray-300 transition duration-150 ease-in-out"
                                    >
                                      <FaShare size={10} />
                                      <p>Edit in Notion</p>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <h5 className="font-semibold">SMS</h5>
                              <p>/sms</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
                                <div className="w-8 h-8 flex justify-center items-center rounded-md border border-gray-400">
                                  <BsThreeDots />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white  hover:bg-gray-200 border-b border-b-gray-400">
                        <div className="">
                          <div className="grid grid-cols-2 items-center px-3 py-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <h5 className="font-semibold">eCommerce</h5>
                              </div>
                              <p>/ecommerce</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex w-full space-x-24">
                                <div className="bg-green-300 rounded-md text-green-600 p-1 font-semibold ml-2">
                                  Published
                                </div>
                                <p className="text-gray-400 font-semibold ml-1">
                                  28 Jan 2023
                                </p>
                              </div>
                              <div className="w-full flex justify-end mr-4 cursor-pointer">
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
              </section>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Tags;
