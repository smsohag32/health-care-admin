import { useState } from "react";

const SideTabs = () => {
   const [activeTab, setActiveTab] = useState("Doctors");

   return (
      <div className="bg-[#ffffff] rounded-[8px] p-4">
         {/* Tabs */}
         <div className="w-full flex items-center">
            <button
               onClick={() => setActiveTab("Doctors")}
               className={`w-full text-base font-medium flex items-center justify-center px-3 py-2.5 border-b-[3px] transition duration-300 ${activeTab === "Doctors"
                  ? "text-title font-medium border-b-[#178CCB]"
                  : "text-[#B4B4B4] font-normal border-b-transparent"
                  }`}
            >
               Doctors
            </button>
            <button
               onClick={() => setActiveTab("Staff")}
               className={`w-full text-base font-medium flex items-center justify-center px-3 py-2.5 border-b-[3px] transition duration-300 ${activeTab === "Staff"
                  ? "text-title font-medium border-b-[#178CCB]"
                  : "text-[#B4B4B4] font-normal border-b-transparent"
                  }`}
            >
               Staff
            </button>
            <button
               onClick={() => setActiveTab("Nurse")}
               className={`w-full text-base font-medium flex items-center justify-center px-3 py-2.5 border-b-[3px] transition duration-300 ${activeTab === "Nurse"
                  ? "text-title font-medium border-b-[#178CCB]"
                  : "text-[#B4B4B4] font-normal border-b-transparent"
                  }`}
            >
               Nurse
            </button>
         </div>

         {/* Tab Content */}
         <div className="mt-4">
            {activeTab === "Doctors" && (
               <div>
                  <p>Doctors content goes here.</p>
               </div>
            )}
            {activeTab === "Staff" && (
               <div>
                  <p>Staff content goes here.</p>
               </div>
            )}
            {activeTab === "Nurse" && (
               <div>
                  <p>Nurse content goes here.</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default SideTabs;
