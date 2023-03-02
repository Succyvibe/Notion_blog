import React from "react";
import Sidebar from "../components/Sidebar";
import { BsYoutube } from "react-icons/bs";
import Setting from "../components/SettingsComponent/Setting";
import CopyRight from "../components/SettingsComponent/CopyRight";

const Settings = () => {
  return (
    <>
      <div className="flex relative w-full h-[90vh] overflow-hidden">
        <div className="w-[18%] relative hidden lg:flex">
          <Sidebar />
        </div>

        <main className="flex-1 h-full">
          <div className="w-full h-full overflow-hidden pb-10">
            <section className="w-[90%] h-full py-12 mx-auto overflow-scroll scrollbar-hide">
              <h1 className="font-semibold text-md lg:text-xl">Settings</h1>

              <div className="flex flex-col mt-8 gap-8">
                {/* ======Website settings==== */}
                <div>
                  <p className="font-semibold">Website</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-t-gray-300">
                    <Setting
                      title="General"
                      text=" Basic blog details and materials"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Design"
                      text="Customize your site and manage themes"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Features"
                      text="Enable or disable the features"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Navigation"
                      text="Set up logo, primary and secondary menus"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Footer"
                      text="Set up footer links and copyright"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Affiliate Watermark"
                      text="Earn recurring revenue by referring new customers"
                      icon={<BsYoutube />}
                    />
                  </div>
                </div>

                {/* ===========Emails Settting */}
                <div>
                  <p className="font-semibold">Emails</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-t-gray-300">
                    <Setting
                      title="Newsletter setup"
                      text="Set up Feather newsletter form"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Email newsletter"
                      text="Find all the collected emails"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="CTA Button setup"
                      text="Setup CTA button"
                      icon={<BsYoutube />}
                    />
                  </div>
                </div>

                {/* =====ADVANCED sETTINGS==== */}
                <div>
                  <p className="font-semibold">Advanced</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-t-gray-300">
                    <Setting
                      title="Field Mapping"
                      text="Map your notion fields with feather"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Code injection"
                      text="Add custom code to your blog"
                      icon={<BsYoutube />}
                    />
                    <Setting
                      title="Clear Cache"
                      text="Revalidate all your cache"
                      icon={<BsYoutube />}
                    />

                    <Setting
                      title="Database Settings"
                      text="Host your blog as a  /blog sub-folder"
                      icon={<BsYoutube />}
                    />

                    <Setting
                      title="Localization"
                      text="Override the default wording to match your brand"
                      icon={<BsYoutube />}
                    />

                    <Setting
                      title="Redirects"
                      text="Setup redirects for your blog"
                      icon={<BsYoutube />}
                    />
                  </div>
                </div>
                {/* ==============Other setting========= */}
                <div>
                  <p className="font-semibold">Other</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-t-gray-300">
                    <Setting
                      title="Delete Blog"
                      text="Delete this blog forever. it can not be recovered"
                      icon={<BsYoutube />}
                    />
                  </div>
                </div>
              </div>
            </section>

            <CopyRight />
          </div>
        </main>
      </div>
    </>
  );
};

export default Settings;
