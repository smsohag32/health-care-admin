import { useState } from "react";

import SidebarItem from "./SidebarItem";

import logo from "@/assets/icons/logo.png";

import { ProfileMenu } from "./ProfileMenu";
import { items } from "./LinkItems";

export default function Sidebar({ toggle, setToggle }) {
   const [openItems, setOpenItems] = useState({});

   const handleToggle = (label) => {
      setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
   };



   return (
      <div className="w-[300px]  pb-6   flex flex-col border-r border-[1px] border-[#E9FFF4] h-screen overflow-hidden  bg-white ">
         <button
            onClick={() => setToggle(!toggle)}
            className="absolute lg:hidden bg-red-600 text-white rounded-s-full p-3 text-bold right-0 top-5">
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </button>
         <div className="flex items-center mb-2 w-full flex-col py-2 overflow-hidden  justify-center px-4  ">
            <div className="w-full flex gap-2 px-3  py-2.5 items-center justify-start">
               <img src={logo} alt="Health Care" className="w-10" />
               <p>HC</p>
            </div>
         </div>

         <div className="px-4  space-y-1 max-h-[75vh] overflow-auto custom-scrollbar pb-6">
            {items.map((item, index) => (
               <SidebarItem
                  key={index}
                  to={item.to}
                  label={item.label}
                  subItems={item.subItems}
                  isOpen={!!openItems[item.label]}
                  onToggle={() => handleToggle(item.label)}
                  icon2={item.icon2}
                  icon={item.icon}
                  hoverIcon={item.hoverIcon}
               />
            ))}
         </div>

         <div className="mt-auto ps-[18px] pe-[12px] w-full">
            <ProfileMenu />
         </div>
      </div>
   );
}
