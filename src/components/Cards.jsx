import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const Cards = () => {
  return (
    <>
      <div className="w-full p-4 lg:p-5 bg-white border  rounded-lg">
        <p className="text-black/60 mb-2 lg:mb-0 text-lg font-semibold ">
          Total sites
        </p>
        <div className="w-full lg:flex justify-between items-center">
          <h4 className="font-bold text-3xl text-black mb-3 lg:mb-0">3</h4>
          <div className=" w-14 flex  items-center bg-green-200 px-2 rounded-md text-green-800 font-semibold">
            <FiTrendingUp className="mr-1" />
            0%
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
