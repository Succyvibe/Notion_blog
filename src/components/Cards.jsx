import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const Cards = () => {
  return (
    <>
      <div className="w-full md:w-[300px] p-5 bg-white border shadow-md rounded-lg">
        <p className="text-black/60 text-lg font-semibold">Total sites</p>
        <div className="w-full flex justify-between items-center">
          <h4 className="font-bold text-3xl text-black">3</h4>
          <div className="flex items-center bg-green-200 px-2 rounded-md text-green-800 font-semibold">
            <FiTrendingUp className="mr-1" />
            0%
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
