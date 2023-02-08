import React from "react";

const AddBlogCardHeader = ({ heading, text }) => {
  return (
    <>
      <div className="px-4 xl:px-0 md:w-[70%] xl:w-[35%] mx-auto text-center mt-8">
        <h3 className="text-gray-700 font-bold md:text-xl xl:text-3xl">
          {heading}
        </h3>
        <p className="text-gray-500 text-sm md:text-xl xl:lg md:my-5">{text}</p>
      </div>
    </>
  );
};

export default AddBlogCardHeader;
