import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const CodeInjection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full">
          <div className="w-full h-full overflow-hidden  ">
            <section className="w-[90%] h-full py-12 mx-auto overflow-scroll scrollbar-hide ">
              <ul className="w-full flex space-x-4 items-center">
                <li
                  className={`  text-black ${
                    pathMatchRoute("/blogs") && "font-semibold"
                  }`}
                >
                  <RiHome6Line size={25} />
                </li>

                <FiChevronRight />
                <li
                  className={`  text-black ${
                    pathMatchRoute("/settings") && "font-semibold"
                  }`}
                >
                  Settings
                </li>
                <FiChevronRight />
                <li
                  className={`  text-black ${
                    pathMatchRoute("/general-settings") && "font-semibold"
                  }`}
                >
                  Code Injection
                </li>
              </ul>
              <h1 className="font-semibold text-md lg:text-xl mt-3">
                Code Injection
              </h1>

              <div className="w-full border-b border-b-gray-300">
                <ul className="flex space-x-5 items-center">
                  <li
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[2px] border-b-black  ${
                      pathMatchRoute("/css") && "text-black lg:border-b-black"
                    }`}
                    onClick={() => navigate("/all-sites")}
                  >
                    CSS
                  </li>
                  <li
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[2px] border-gray-300  ${
                      pathMatchRoute("/css") && "text-black lg:border-b-black"
                    }`}
                    onClick={() => navigate("/all-sites")}
                  >
                    Head HTML
                  </li>
                  <li
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[2px] border-gray-300  ${
                      pathMatchRoute("/css") && "text-black lg:border-b-black"
                    }`}
                    onClick={() => navigate("/all-sites")}
                  >
                    Body HTML
                  </li>
                </ul>
              </div>
              <div className="w-full border-b border-b-gray-300 pb-6">
                {/* =====codee */}

                <div className="w-full bg-white px-4 py-2 h-[300px] overflow-hidden mt-4 rounded-md">
                  <div className="w-full h-full ">
                    <div className="w-full overflow-scroll h-full scrollbar-hide">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et magni iusto ut nesciunt neque hic facilis rerum illum
                        eligendi beatae doloribus totam inventore optio, vitae
                        nostrum, a officia rem in at repellat praesentium minus
                        ab commodi voluptate. Suscipit facilis sapiente
                        voluptatibus id commodi laborum laboriosam, molestias
                        ducimus maxime asperiores, voluptates expedita fuga
                        eligendi voluptatum laudantium excepturi consectetur!
                        Recusandae, vero eveniet quis illum dolore tempora sed
                        distinctio, maiores expedita soluta inventore neque
                        nobis nesciunt commodi, magnam aliquid temporibus quo
                        fugiat ad repellat beatae qui assumenda nisi optio!
                        Ipsum totam quaerat dolor quas sed nesciunt mollitia
                        expedita tempore molestias quae esse cupiditate ratione
                        dolores temporibus, nisi, nam nulla molestiae reiciendis
                        repellat iure? Dicta mollitia molestiae corrupti eos ab
                        nulla voluptate illum, reprehenderit aut aspernatur
                        dolorem quibusdam velit nobis dolores vero repellendus
                        dolore dolorum dignissimos est, itaque ut obcaecati
                        temporibus tempora? At recusandae corrupti quisquam
                        nihil voluptatibus nam ut est quibusdam velit alias
                        distinctio itaque fugit ex et placeat pariatur amet
                        minima, sunt eum dolore blanditiis doloribus cupiditate?
                        Officia nesciunt inventore quisquam, alias incidunt
                        tenetur at corporis voluptates animi repudiandae
                        molestiae! Consequuntur dolorum voluptates ipsa
                        inventore numquam debitis molestias velit recusandae
                        laudantium, fuga, nostrum, deserunt ab sit perferendis
                        dolore delectus obcaecati! Laboriosam, fuga!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et magni iusto ut nesciunt neque hic facilis rerum illum
                        eligendi beatae doloribus totam inventore optio, vitae
                        nostrum, a officia rem in at repellat praesentium minus
                        ab commodi voluptate. Suscipit facilis sapiente
                        voluptatibus id commodi laborum laboriosam, molestias
                        ducimus maxime asperiores, voluptates expedita fuga
                        eligendi voluptatum laudantium excepturi consectetur!
                        Recusandae, vero eveniet quis illum dolore tempora sed
                        distinctio, maiores expedita soluta inventore neque
                        nobis nesciunt commodi, magnam aliquid temporibus quo
                        fugiat ad repellat beatae qui assumenda nisi optio!
                        Ipsum totam quaerat dolor quas sed nesciunt mollitia
                        expedita tempore molestias quae esse cupiditate ratione
                        dolores temporibus, nisi, nam nulla molestiae reiciendis
                        repellat iure? Dicta mollitia molestiae corrupti eos ab
                        nulla voluptate illum, reprehenderit aut aspernatur
                        dolorem quibusdam velit nobis dolores vero repellendus
                        dolore dolorum dignissimos est, itaque ut obcaecati
                        temporibus tempora? At recusandae corrupti quisquam
                        nihil voluptatibus nam ut est quibusdam velit alias
                        distinctio itaque fugit ex et placeat pariatur amet
                        minima, sunt eum dolore blanditiis doloribus cupiditate?
                        Officia nesciunt inventore quisquam, alias incidunt
                        tenetur at corporis voluptates animi repudiandae
                        molestiae! Consequuntur dolorum voluptates ipsa
                        inventore numquam debitis molestias velit recusandae
                        laudantium, fuga, nostrum, deserunt ab sit perferendis
                        dolore delectus obcaecati! Laboriosam, fuga!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button className="px-3 py-1.5 bg-transparent border border-gray-600 rounded ">
                  Cancel
                </button>
                <button className="px-3 py-1.5 bg-gray-800 text-white border border-gray-600 rounded ">
                  Save Changes
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default CodeInjection;
