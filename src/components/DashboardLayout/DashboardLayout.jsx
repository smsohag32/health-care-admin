

import { useState } from "react";
import TopBar from "@/components/DashboardLayout/TopBar"

import Sidebar from "@/components/DashboardLayout/Sidebar";
import { ScrollRestoration } from "react-router-dom";

const DashboardLayout = ({ children }) => {
   const [toggle, setToggle] = useState(false)

   return (
      <div className="w-full relative overflow-hidden ">
         <div className={` min-h-screen  fixed top-0 left-0 bottom-0 z-50 transition-all max-w-full duration-500 primary-bg transform ${toggle ? "lg:-translate-x-full translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}>
            <Sidebar toggle={toggle} setToggle={setToggle} />
         </div>
         <div className={` w-full duration-500  transition-all transform  ${toggle ? "lg:pl-0 pl-[320px]" : "lg:pl-[320px] pl:0"
            }`}>
            <div className="w-full sticky top-0 left-0 right-0">
               <TopBar toggle={toggle} setToggle={setToggle} />
            </div>
            <div className="px-4 py-4">
               {children}
            </div>

         </div>

         <ScrollRestoration />
      </div>
   );
};

export default DashboardLayout;
