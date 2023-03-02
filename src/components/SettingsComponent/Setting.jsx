import React from "react";

const Setting = ({ title, text, icon }) => {
  return (
    <>
      <div className="flex items-center space-x-2 mt-4">
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-400">
          {icon}
        </div>
        <div>
          <div className="flex space-x-2">
            <p className="text-md font-semibold ">{title}</p>
            {/* <div className="bg-gray-300 rounded-md  px-1">{badge}</div> */}
          </div>
          <p className="text-gray-400 text-sm">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Setting;
