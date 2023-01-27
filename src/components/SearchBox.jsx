import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <>
      <div className="flex items-center border-gray-200 rounded-lg w-full md:w-[350px] bg-white p-3 border-2">
        <FiSearch size={25} className="font-semibold text-gray-200" />
        <input
          type="text"
          placeholder="Search sites"
          className="text-black/60 text-md font-medium border-none outline-none bg-transparent"
        />
      </div>
    </>
  );
};

export default SearchBox;
