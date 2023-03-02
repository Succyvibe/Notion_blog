import React from "react";

import Sidebar from "../components/Sidebar";

const Domains = () => {
  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full overflow-scroll">
          <div className="w-full h-full">
            <section className="w-[90%] h-full py-4 mx-auto ">
              <div className="border-b border-b-gray-400 w-full pb-4">
                <h3 className="font-bold  text-md md:text-xl text-black">
                  Domains
                </h3>
              </div>

              <div className="w-[25%] bg-gray-300 rounded-md p-1 grid grid-cols-2 gap-2 mt-8">
                <div className=" bg-gray-400 text-center rounded p-1">
                  <p>Subdomain</p>
                </div>
                <div className="bg-white text-center rounded py-1">
                  <p className="font-medium">Custom domain</p>
                </div>
              </div>

              <div className="mt-2 border-b border-gray-300 pb-4">
                <h4 className="text-md  md:text-md  font-semibold text-gray-600">
                  Domain <span className="text-red-700">*</span>
                </h4>
                <input
                  type="text"
                  className="w-full border border-gray-600 px-3 py-1.5 rounded-md outline-none "
                  placeholder="paste your URL "
                />
              </div>

              <div className="flex justify-end items-center mt-4">
                <button className="bg-gray-800 text-white px-4 py-2  rounded-md font-semibold">
                  <p className="text-xs font-bold">Recheck Status</p>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Domains;
