import React from "react";
import { Link } from "react-router-dom";
import AddBlogCardHeader from "../components/AddBlogCardHeader";
import BackBtnSm from "../components/BackBtnSm";
import BtnSm from "../components/BtnSm";

const DataFinish = () => {
  return (
    <>
      <AddBlogCardHeader
        heading="You're all set to go"
        text="Choose a feather blog subdomain for your blog. Don't worry you can change and your own domain later"
      />
      <div className="w-[90%] xl:w-[40%] mx-auto flex justify-end mt-3">
        <div className="flex space-x-3">
          <Link to="/database-author">
            <BackBtnSm />
          </Link>
          <Link to="">
            <BtnSm text="finish" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataFinish;
