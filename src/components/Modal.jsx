rafce;
import React from "react";

const Modal = () => {
  return (
    <div className="bg-black/60 absolute top-0 left-0 h-screen w-full z-20 flex justify-center items-center">
      <div className="bg-white w-[30%] mx-auto p-3">
        <h5>Setup Hero Block</h5>
        <p>This block will show up at the top of the articles list page</p>
      </div>
    </div>
  );
};

export default Modal;
