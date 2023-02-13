import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <nav className="w-[100%] h-[100%] bg-white border-r-gray-300 p-3  ">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gray-300">
          <img
            src=""
            alt="user"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h5 className="text-gray-500 font-semibold text-md">Profally Blog</h5>
          <button className="text-gray-300 text-sm font-medium">
            profailly.feather.com
          </button>
        </div>
      </div>
      <div>
        <ul className="mt-4 flex flex-col gap-[3px]">
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium ${
              pathMatchRoute("/dashboard") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p> Dashboard</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/create-blog") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/create-blog")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Content</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/database-pages") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/database-pages")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p> Pages</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/database-tags") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/database-tags")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Tags</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/database-authors") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/database-authors")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Authors</p>
          </li>
        </ul>
      </div>

      {/* ============Advanced======= */}

      <div className="pt-4">
        <h5 className="text-gray-300 font-medium text-sm">ADVANCED</h5>
        <ul className="mt-2 flex flex-col gap-[3px]">
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium ${
              pathMatchRoute("/analytic") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/analytic")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p> Analytic</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/domain") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/domain")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Domains</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/settings") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/settings")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Settings</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/database-tags") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/database-tags")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Tags</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/database-authors") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/database-authors")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Authors</p>
          </li>
        </ul>
      </div>
      <div className="pt-3">
        <h5 className="text-gray-300 font-medium text-sm">OTHER</h5>
        <ul className="mt-2 flex flex-col gap-1">
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/analytic") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/analytic")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p> Affilliate Program</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/program") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/program")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Domains</p>
          </li>
          <li
            className={`flex items-center cursor-pointer py-1 space-x-2 text-sm font-medium  ${
              pathMatchRoute("/affliate") &&
              "text-black font-semibold bg-gray-200 px-1 rounded-md"
            }`}
            onClick={() => navigate("/affiliate")}
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Affiliate</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
