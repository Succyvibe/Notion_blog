import React from "react";

const BlogCard = () => {
  return (
    <div>
      <div className="w-[400px] bg-white p-3">
        <div className="w-full flex justify-center">
          <div className="w-10 h-10 rounded-full bg-gray">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
              alt="user"
              className="w-full h-full object-fit rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
