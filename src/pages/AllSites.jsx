import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { BsArrowUpRightSquare, BsThreeDots } from "react-icons/bs";
import Cards from "../components/Cards";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
// import BlogCard from "../components/BlogCard";

const AllSites = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto pt-10 px-4">
        <div>
          <div className="flex flex-col space-y-3 mb-3">
            <h1 className="font-bold text-3xl text-black">Welcome Back,</h1>
            <p className="text-black/60 text-md font-medium">
              You are logged in as solomoneseme@gmail,con
            </p>
          </div>

          {/* ====================================Graph Analytics============================================== */}
          <div className="flex flex-col lg:flex-row w-full justify-between gap-5">
            <div className="flex-1 bg-white shadow-sm rounded-lg border-b border-gray-400">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full border-b p-5">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Page Views Chart
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-3">
                    Keep track of this month's pageviews from here.
                  </p>
                </div>
                <select
                  name="month"
                  id="month"
                  className="w-full lg: text-md rounded-md border-gray-400 border px-4 py-2 font-bold text-black"
                >
                  <option value="thirty" className="">
                    Last 30 Days
                  </option>
                </select>
              </div>

              <div className="pl-8 pr-6 pt-4">
                <div className="w-full flex justify-end items-center">
                  <RxHamburgerMenu />
                </div>
                <div className=" before:absolute before:bg-blue-500 after:flex after:bg-blue-300 ">
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] xl:w-[30%] bg-white shadow-sm rounded-lg border-b border-gray-400">
              <div className=" w-full border-b p-5">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Total Page Views
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-3">
                    You’ve already used 1% of available pageviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-7 flex flex-col lg:flex-row gap-5">
            <Cards />
            <Cards />
            <Cards />
          </div>

          <div className="mt-5 lg:mt-7 flex flex-col lg:flex-row justify-between lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-black">My sites</h3>
              <p className="text-sm font-medium text-gray-500 mt-2 lg:mt-3">
                Keep track of all your feather sites here.
              </p>
            </div>
            <SearchBox />
          </div>

          {/* ====================================Blogs==================================== */}
          <div className="grid lg:grid-cols-3 mt-7 gap-6 mb-8 w-full">
            <div className=" bg-gray-200 border-2 border-gray-300 border-dashed p-10 rounded-lg space-y-4">
              <div className="w-10 h-10 rounded-lg border-2 border-gray-300 flex justify-center items-center mx-auto">
                <IoMdAdd size={20} />
              </div>
              <div className="text-center">
                <h4 className="text-black/60 text-lg font-semibold">
                  Create new blog
                </h4>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  Dive into the editor and start creating
                </p>
              </div>
            </div>
            {/* ============================Blog Card=============================== */}
            {/* <BlogCard /> */}
            <div className=" bg-white rounded-lg border border-gray-300 flex flex-col">
              <div className="border-b border-gray-200">
                <div className=" p-6">
                  <div className="w-full flex justify-center items-center">
                    <div className="flex w-full items-center gap-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
                          alt="user"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">
                          Masteringbackend
                        </h5>
                        <p className="text-gray-400 text-sm font-medium">
                          masteringbackend.feather.blog
                        </p>
                      </div>
                    </div>
                    <BsThreeDots size={25} className="cursor-pointer" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mt-4 ">
                      Last updated on 25 Jan 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-x-5  justify-end pr-4 my-5">
                <Link to="/blogs" className="flex items-center space-x-2">
                  <p className="text-black/80 text-sm font-bold  ">
                    Go to blogs
                  </p>
                  <BsArrowUpRightSquare />
                </Link>
                <Link to="/blogs">
                  <p className="text-black/80 text-sm font-bold  ">
                    Blog dashboard
                  </p>
                </Link>
              </div>
            </div>
            <div className=" bg-white rounded-lg border border-gray-300 flex flex-col">
              <div className="border-b border-gray-200">
                <div className=" p-6">
                  <div className="w-full flex justify-center items-center">
                    <div className="flex w-full items-center gap-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
                          alt="user"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">
                          Masteringbackend
                        </h5>
                        <p className="text-gray-400 text-sm font-medium">
                          masteringbackend.feather.blog
                        </p>
                      </div>
                    </div>
                    <BsThreeDots size={25} className="cursor-pointer" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mt-4 ">
                      Last updated on 25 Jan 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-x-5  justify-end pr-4 my-5">
                <Link to="/blogs" className="flex items-center space-x-2">
                  <p className="text-black/80 text-sm font-bold  ">
                    Go to blogs
                  </p>
                  <BsArrowUpRightSquare />
                </Link>
                <Link to="/blogs">
                  <p className="text-black/80 text-sm font-bold  ">
                    Blog dashboard
                  </p>
                </Link>
              </div>
            </div>
            <div className=" bg-white rounded-lg border border-gray-300 flex flex-col">
              <div className="border-b border-gray-200">
                <div className=" p-6">
                  <div className="w-full flex justify-center items-center">
                    <div className="flex w-full items-center gap-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
                          alt="user"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">
                          Masteringbackend
                        </h5>
                        <p className="text-gray-400 text-sm font-medium">
                          masteringbackend.feather.blog
                        </p>
                      </div>
                    </div>
                    <BsThreeDots size={25} className="cursor-pointer" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mt-4 ">
                      Last updated on 25 Jan 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-x-5  justify-end pr-4 my-5">
                <Link to="/blogs" className="flex items-center space-x-2">
                  <p className="text-black/80 text-sm font-bold  ">
                    Go to blogs
                  </p>
                  <BsArrowUpRightSquare />
                </Link>
                <Link to="/blogs">
                  <p className="text-black/80 text-sm font-bold  ">
                    Blog dashboard
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSites;
