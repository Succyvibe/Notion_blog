import React from "react";
import blogImage from "../assets/img/css-position-property.png";
import comment from "../assets/img/comments.png";
import amf from "../assets/img/Amf.PNG";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      banner: blogImage,
      tags: ["css", "positioning", "layout"],
      date: "Feb 14, 2023",
      title: "How to position things in css (Ultimate Guide)",
    },
    {
      id: 2,
      banner: comment,
      tags: ["Javascript", "web development"],
      date: "Feb 14, 2023",
      title: "How to comment in JavaScript",
    },
    {
      id: 3,
      banner: amf,
      tags: ["Javascript", "web development"],
      date: "Feb 14, 2023",
      title: "How to position things in css",
    },
  ];
  return (
    <>
      <main className="max-w-5xl mx-auto pt-14 lg:pt-20 lg:px-4 xl:px-0">
        <div className="w-full px-4  lg:px-0">
          <h1 className="text-center lg:text-start text-lg lg:text-5xl font-bold">
            Insight and advice <br className="hidden lg:block" /> from our
            expert team
          </h1>
          <p className="pt-4 text-center lg:text-start text-sm md:text-md">
            Find out how the best marketing automation tips and tricks work.
          </p>
        </div>

        <section className="pt-10 lg:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-14 px-4 lg:px-0 pb-16">
            {blogs.map((blog) => {
              return (
                <div>
                  <div className="w-full h-[160px] lg:h-[260px] rounded-2xl">
                    <img
                      src={blog.banner}
                      alt="banner"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-wrap items-center space-x-2 mt-4">
                    {blog.tags.map((tag) => {
                      return (
                        <div className="bg-pink-200 rounded-xl px-2 text-pink-800 text-sm md:text-md font-semibold">
                          {tag}
                        </div>
                      );
                    })}

                    <small className="text-gray-400 text-md font-semibold">
                      -
                    </small>
                    <small className="text-gray-400 text-md font-semibold">
                      {blog.date}
                    </small>
                  </div>
                  <h4 className="font-semibold text-md lg:text-xl mt-2 lg:mt-4">
                    {blog.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <section className="pt-8 bg-gray-300 pb-20 lg:px-4 xl:px-0">
        <div className="max-w-5xl mx-auto border-b-2 border-b-gray-400 pb-10">
          <div className="w-full flex items-center justify-between px-4 lg:px-0">
            <h3 className="font-bold text-xl md:text-2xl">eCommerce</h3>
            <button className="bg-red-400 text-white px-2 rounded-xl text-sm md:text-md">
              View all
            </button>
          </div>

          <section className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14 px-4 lg:px-0">
              {blogs.map((blog) => {
                return (
                  <div>
                    <div className="w-full h-[160px] rounded-2xl">
                      <img
                        src={blog.banner}
                        alt="banner"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    <div className="flex flex-wrap items-center space-x-2 mt-4">
                      {blog.tags.map((tag) => {
                        return (
                          <div className="bg-pink-200 rounded-xl px-2 text-pink-800 text-md font-semibold text-sm text-center">
                            {tag}
                          </div>
                        );
                      })}

                      <small className="text-gray-400 text-md font-semibold">
                        -
                      </small>
                      <small className="text-gray-400 text-md font-semibold">
                        {blog.date}
                      </small>
                    </div>
                    <h4 className="font-semibold text-md mt-4">{blog.title}</h4>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      {/* ===============ALl Tags===== */}

      <section className="pt-8 bg-white pb-10 lg:px-4 xl:px-0">
        <div className="max-w-5xl mx-auto  pb-10">
          <div className="w-full flex flex-wrap px-4 lg:px-0">
            <div className="bg-red-200 rounded-xl px-2 text-pink-800 text-md font-semibold text-sm text-center">
              All Tags
            </div>
            <div className=" px-2 text-black text-md font-semibold text-sm text-center">
              Case Marketing
            </div>
          </div>

          <section className="pt-10">
            <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14 px-4 lg:px-0">
              {blogs.map((blog) => {
                return (
                  <div>
                    <div className="w-full h-[160px] rounded-2xl">
                      <img
                        src={blog.banner}
                        alt="banner"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    <div className="flex flex-wrap items-center space-x-2 mt-4">
                      {blog.tags.map((tag) => {
                        return (
                          <div className="bg-pink-200 rounded-xl px-2 text-pink-800 text-md font-semibold text-sm text-center">
                            {tag}
                          </div>
                        );
                      })}

                      <small className="text-gray-400 text-md font-semibold">
                        -
                      </small>
                      <small className="text-gray-400 text-md font-semibold">
                        {blog.date}
                      </small>
                    </div>
                    <h4 className="font-semibold text-md mt-4">{blog.title}</h4>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center mt-6">
              <button className="bg-gray-200 text-black rounded-xl text-md px-2">
                Load More
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* ================CTA======= */}
      <section className="bg-gray-300">
        <div className="lg:w-[40%] mx-auto py-10 text-center  ">
          <p>Ready to take the next big step for your business?</p>
          <h2 className="font-bold text-lg lg:text-3xl">
            Join other 3200+ marketers now!
          </h2>
          <div className="lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-3 mt-6 w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white border-gray-400 rounded-2xl px-10 py-2 w-full lg:w-[60%]"
            />
            <button className="bg-pink-600 text-white px-3 py-2 rounded-2xl w-full lg:flex-1">
              Subscribe to newslatter
            </button>
          </div>
          <p className="text-gray-600 mt-3 mb-4">
            No spam. Unsubscribe at any time
          </p>
        </div>
      </section>

      {/* Footer */}

      <footer className="pb-4">
        <div className="max-w-5xl mx-auto py-8 border-b border-b-gray-300 px-4">
          <div className="grid gricols-1 lg:grid-cols-3 gap-4">
            <div>
              <h5 className="text-black font-bold text-lg mb-3">
                Profaily Blog
              </h5>
              <p className="text-gray-400 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                molestias distinctio ipsa fugiat consequuntur deleniti,
                necessitatibus perferendis animi minus voluptates sed quam,
                eaque aperiam doloribus optio? Accusantium dolores temporibus
                sed!
              </p>
            </div>

            <div className="flex lg:justify-center">
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <Link to="/other">
                  <li className="">Other</li>
                </Link>
                <Link to="/blog">
                  <li>Blog Home</li>
                </Link>
                <Link to="/Link">
                  <li>Link</li>
                </Link>
                <Link to="/other">
                  <li>Another Link</li>
                </Link>
              </ul>
            </div>

            <div className="flex lg:justify-center">
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <Link to="/other">
                  <li>Social</li>
                </Link>
                <Link to="/blog">
                  <li>Twitter</li>
                </Link>
                <Link to="/Link">
                  <li>RSS Feed</li>
                </Link>
                <Link to="/other">
                  <li>Sitemap</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm">
          @2023 Profaily Blog All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Blogs;
