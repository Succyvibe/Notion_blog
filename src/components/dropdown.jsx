import React from "react";

const dropdown = () => {
  return (
    <>
      {toggleIcon ? (
        <div className="absolute -bottom-4 left-20 bg-white w-48 flex flex-col space-y-4 p-2 rounded-md shadow-md ">
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
    </>
  );
};

export default dropdown;
