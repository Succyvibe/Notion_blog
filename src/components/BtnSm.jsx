import React from "react";

const BtnSm = ({ color, text }) => {
  return (
    <>
      <button className="bg-gray-700 px-4 py-2 rounded-md text-white">
        {text}
      </button>
    </>
  );
};

export default BtnSm;
