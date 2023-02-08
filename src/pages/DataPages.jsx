import React from "react";
import { Link } from "react-router-dom";

import AddBlogCard from "../components/AddBlogCard";
import AddBlogCardHeader from "../components/AddBlogCardHeader";
import BackBtnSm from "../components/BackBtnSm";
import BtnSm from "../components/BtnSm";

const DataPages = () => {
  return (
    <>
      <main>
        <AddBlogCardHeader
          heading=" Map the fields to Notion properties"
          text=" Left side fields are the fields that are used to build the blog, and
          the right side ones are the notion properties."
        />
        <AddBlogCard
          content="Content"
          pages="Pages"
          tags="Tags"
          authors="Authors"
          heading="Pages database is not connected"
          text="Please enter the notion page URL of your Pages databases."
          label="Pages Database URL (optional) "
          span="*"
        />

        <div className="w-[90%] xl:w-[40%] mx-auto flex justify-end mt-3">
          <div className="flex space-x-3">
            <Link to="/create-blog-two">
              <BackBtnSm />
            </Link>
            <Link to="/database-tags">
              <BtnSm text="Next" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default DataPages;
