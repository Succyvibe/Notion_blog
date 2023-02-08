import React from "react";
import { TbLayoutGridAdd } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <main className="">
        <section
          className="max-w-[880px] mx-auto text-center pt-[92px] flex flex-col gap-8"
          id="features"
        >
          <h1 className="  xl:text-7xl font-semibold text-gray-800">
            Notion to Blog in minutes
          </h1>
          <p className="text-2xl font-medium px-[54px] text-gray-500">
            Write your content on Notion and automatically publish it to your
            SEO-friendly blog – No coding or design skills required.
          </p>
          <div className="space-x-4 mt-4">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-xl text-md font-medium">
              Start your free trial
            </button>
            <button className="border border-gray-200 rounded-xl text-gray-800 px-5 py-3 text-md font-bold">
              View examples
            </button>
          </div>
          <div className="flex relative w-[300px] mx-auto mt-4">
            <div className="w-10 h-10 rounded-full absolute top-0 left-8">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fana.jpeg&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-10 absolute top-0 left-16">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fanthony.png&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-20 absolute top-0 left-24">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fayush.jpeg&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-[23] absolute top-0 left-32">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fdamon.jpeg&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-[24] absolute top-0 left-24">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Froberto.png&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-[25] absolute top-0 left-40">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftibo.jpeg&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-[26] absolute top-0 left-48">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fvensy.png&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full z-[28] absolute top-0 left-56">
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftom.jpeg&optimizer=image"
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-[380px] mx-auto mt-7 px-[22px]">
            <p className="text-gray-500 text-md">
              Join
              <span className=" pl-1  text-gray-800 font-medium">
                150+ creators, and new-age startups
              </span>
              <br />
              and start publishing your content today
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto mt-6">
          <img
            src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Fhero-mockup.png&optimizer=image"
            alt="sample"
          />
        </div>

        <section className="max-w-6xl mx-auto text-center mb-10">
          <h5 className="mb-16 mt-10 text-xl text-gray-900 font-bold">
            Trusted by 100+ startups
          </h5>
          <div className="grid grid-cols-6 gap-10 ">
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Ftweet-hunter.svg&optimizer=image"
                alt="Tweet hunter"
                className="w-32"
              />
            </div>
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Ftestimonial.svg&optimizer=image"
                alt="testimonial"
                className="w-36"
              />
            </div>
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Fgrowthx.png&optimizer=image"
                alt="Growth"
                className="w-28"
              />
            </div>
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Fbeyonk.svg&optimizer=image"
                alt="Growth"
                className="w-32"
              />
            </div>
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Ftaplio.svg&optimizer=image"
                alt="tapilo"
                className="w-28"
              />
            </div>
            <div>
              <img
                src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogos%2Findie-worldwide.png&optimizer=image"
                alt="tapilo"
                className="w-20"
              />
            </div>
          </div>
        </section>
      </main>

      {/* =================Card one================= */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h5 className="text-gray-900 font-bold mb-5">
              A COMPLETE BLOGGING PLATFORM
            </h5>
            <h2 className="text-[42px] font-bold text-gray-900 mb-3">
              Smoothly run your content machine
            </h2>
            <p className="text-gray-600 text-xl">
              Feather is a simple yet powerful platform that helps create a
              superfast <br /> blog with Notion as a CMS. It's just set and
              forget!
            </p>
          </div>
          <div className="grid grid-cols-2 mt-20 gap-20">
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Funlimited-blogs.png&optimizer=image"
              alt=""
              className="shadow-2xl rounded-2xl"
            />

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Create unlimited blog sites
                </h3>
                <p className="text-gray-500 text-lg mt-4">
                  Create as many blog sites as you'd like. We don't charge you
                  for creating additional sites.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Unlimited blogs</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Custom domain for each site</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Analytics for each site</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Pricing based on page views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================Card Two==================== */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 mt-20 gap-20">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  View detailed blog analytics
                </h3>
                <p className="text-gray-500 text-xl mt-4">
                  See your page views, visitors, referrers, clicks, and many
                  more for all of your blogs.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Inbuilt analytics for all your sites</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Find out where people are finding your blog</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Find out the links people are clicking the most</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Find out which of your posts are popular</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fanalytics.png&optimizer=image"
              alt=""
              className="shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ====================Card Three========= */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 mt-20 gap-20">
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fnewsletter.png&optimizer=image"
              alt=""
              className="shadow-2xl rounded-2xl"
            />

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Be in touch with your readers
                </h3>
                <p className="text-gray-500 text-lg mt-4">
                  Inbuilt form to collect emails from your blog readers.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Collect emails from your readers</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Export the emails as CSV</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>View all the emails in your dashboard</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Double opt-in by default</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================Card Four============== */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 mt-20 gap-20">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Optimized for SEO
                </h3>
                <p className="text-gray-500 text-lg mt-4">
                  All you have to do is to write good content that satisfies the
                  needs of your readers. We takes care of the rest.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Set all the proper meta tags and canonical links</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p> Structured Schema markup for all your posts</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Served from the edge to make the blog super fast</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Easy controls to override the seo settings</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fseo-optimized.png&optimizer=image"
              alt=""
              className="shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============Card Five============== */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto border-b pb-40">
          <div className="grid grid-cols-2 mt-20 gap-20">
            <img
              src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fsub-folder.png&optimizer=image"
              alt=""
              className="shadow-2xl rounded-2xl"
            />

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Add your blog on the sub folder
                </h3>
                <p className="text-gray-500 text-lg mt-4">
                  You can optionally choose to have your blog on a subfolder.
                  This is really good for SEO.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>
                      Your blog can be on a sub-domain like{" "}
                      <span className="text-gray-900 font-bold">
                        blog.example.com
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>
                      Your blog can be the main domain like
                      <span className="text-gray-900 font-bold">
                        example.com
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>View all the emails in your dashboard</p>
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-500">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p>Double opt-in by default</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center font-bold text-gray-900 text-5xl mb-10">
            Everything you need to build a blog
          </h3>
          <div className="grid grid-cols-2 gap-y-16 gap-x-10">
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div className="">
                  <h4 className="text-gray-700 font-bold text-xl">
                    Custom Domain
                  </h4>
                  <p className="text-gray-700">
                    Brand your blog with your own custom domain or use any
                    feather.blog subdomains.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">Sitemap</h4>
                  <p className="text-gray-700 text-md">
                    Automatic sitemap to make it easy for search engines to know
                    what all links your blog has.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">Search</h4>
                  <p className="text-gray-700 text-md">
                    Quickly search and find any article you want with just a
                    keyboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">RSS Feed</h4>
                  <p className="text-gray-700 text-md">
                    Readers can always get notified when you publish a new
                    article.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">
                    Lightning Fast
                  </h4>
                  <p className="text-gray-700 text-md">
                    Every blog is optimized to the maximum for load speeds.
                    Search engines would love your blog.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">Tags</h4>
                  <p className="text-gray-700 text-md">
                    Categorize your articles and make it easy for your readers
                    to read other articles in the same category.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">
                    Related Posts
                  </h4>
                  <p className="text-gray-700 text-md">
                    Make it easy for your readers to explore and read other
                    related articles at the end of every article.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200">
                <TbLayoutGridAdd size={30} />
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="text-gray-700 font-bold text-xl">
                    Multiple Authors
                  </h4>
                  <p className="text-gray-700 text-md">
                    Make it easy for your readers to explore the writings of
                    individual authors. A separate dedicated page for each
                    author in your blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-32 bg-slate-200">
        <div className=" max-w-6xl mx-auto lg:pt-32">
          <div className=" text-center">
            <h5 className="text-md font-bold text-gray-700">HOW IT WORKS</h5>
            <h2 className="text-5xl text-gray-900 font-semibold mt-6">
              Launch your blog in 4 easy steps
            </h2>
            <p className="text-xl mt-4">
              Create your own Notion blog with Feather and launch it with just 4
              easy steps
            </p>
          </div>
          <div className="grid lg:grid-cols-4 mt-20 pb-10">
            <div className="flex items-center gap-8 after:border-t   after:flex-1  after:border-gray-300 group-hover">
              <div className="w-10 h-10 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200 lg:ml-8 hover:bg-gray-900">
                <TbLayoutGridAdd size={20} />
              </div>
            </div>
            <div className="flex items-center gap-8 after:border-t   after:flex-1  after:border-gray-300 group-hover">
              <div className="w-10 h-10 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200 lg:ml-8 hover:bg-gray-900">
                <TbLayoutGridAdd size={20} />
              </div>
            </div>
            <div className="flex items-center gap-8 after:border-t group-hover  after:flex-1  after:border-gray-300">
              <div className="w-10 h-10 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200 lg:ml-8 hover:bg-gray-900">
                <TbLayoutGridAdd size={20} />
              </div>
            </div>
            <div className="flex items-center group">
              <div className="w-10 h-10 rounded-md border border-gray-500 flex justify-center items-center bg-gray-200 lg:ml-8 hover:bg-gray-900">
                <TbLayoutGridAdd size={20} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-16 pb-16">
            <div>
              <small className="text-gray-500 font-semibold text-sm">01</small>
              <h5 className="text-gray-900 text-xl font-bold">
                Add your databases
              </h5>
              <p className="text-gray-500 text-lg mt-3">
                Use your own Notion databases or duplicate ours.
              </p>
            </div>
            <div>
              <small className="text-gray-500 font-semibold text-sm">02</small>
              <h5 className="text-gray-900 text-xl font-bold">
                Map your fields
              </h5>
              <p className="text-gray-500 text-lg mt-3">
                Map your Notion fields with Feather fields.
              </p>
            </div>
            <div>
              <small className="text-gray-500 font-semibold text-sm">03</small>
              <h5 className="text-gray-900 text-xl font-bold">
                Choose your domain
              </h5>
              <p className="text-gray-500 text-lg mt-3">
                Choose a domain or a subdomain for your blog.
              </p>
            </div>
            <div>
              <small className="text-gray-500 font-semibold text-sm">04</small>
              <h5 className="text-gray-900 text-xl font-bold">Get your blog</h5>
              <p className="text-gray-500 text-lg mt-3">
                That's it. You will get back a professional blog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================SHOWCASE================= */}
      <section className="lg:mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h4 className="font-bold text-gray-600">SHOWCASE</h4>
            <h2 className="font-bold text-gray-900 text-5xl mt-6">
              Beautiful & minimal blogs built with Feather
            </h2>
            <p className="text-gray-500 text-xl mt-6">
              Check out these blogs to discover some of the possibilities with
              feather <br /> and Notion.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-7 mt-20">
            <div className="cursor-pointer group transition-all ease-out duration-200 hover:-translate-y-2">
              <div className="bg-gray-600 rounded-2xl">
                <div className="w-[85%] mx-auto pt-7">
                  <img
                    src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fsub-folder.png&optimizer=image"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Bhanu Teja P</p>
                <Link className="hidden group-hover:flex">bhanu.dev/all</Link>
              </div>
            </div>
            <div className="cursor-pointer group transition-all ease-out duration-200 hover:-translate-y-2">
              <div className="bg-yellow-500 rounded-2xl">
                <div className="w-[85%] mx-auto pt-7">
                  <img
                    src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Ffeatures%2Fsub-folder.png&optimizer=image"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Bhanu Teja P</p>
                <Link className="hidden group-hover:flex">bhanu.dev/all</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
