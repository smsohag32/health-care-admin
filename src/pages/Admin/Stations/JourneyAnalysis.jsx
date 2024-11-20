
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
import Empty from "@/components/empty/Empty";
import AnalysisGraph from "@/pages/dashboard/Overview/AdminOverview/AnalysisGraph";
import { useState } from "react";
import { Link } from "react-router-dom";

const JourneyAnalysis = () => {
   const [date, setDate] = useState(new Date())
   const journeyIncomeAnalysis = [
      { date: "09/11/24", onboarding: 120, offboarding: 100, income: 120 * 50 },
      { date: "08/11/24", onboarding: 85, offboarding: 75, income: 85 * 50 },
      { date: "07/11/24", onboarding: 50, offboarding: 45, income: 50 * 50 },
      { date: "06/11/24", onboarding: 200, offboarding: 180, income: 200 * 50 },
      { date: "05/11/24", onboarding: 75, offboarding: 70, income: 75 * 50 },
      { date: "04/11/24", onboarding: 150, offboarding: 130, income: 150 * 50 },
      { date: "03/11/24", onboarding: 100, offboarding: 90, income: 100 * 50 },
      { date: "02/11/24", onboarding: 45, offboarding: 40, income: 45 * 50 },
      { date: "01/11/24", onboarding: 110, offboarding: 100, income: 110 * 50 },
   ];



   return (


      <div className="mt-[48px]">
         <div className="flex items-center justify-between gap-4">
            <p className="text-[20px] text-[#000000CC]">Journey and Income Analysis</p>
            <div>
               <CustomDropdown
                  isDatePicker={true}
                  selectedValue={date}
                  triggerClassName={"border-[#808080]"}
                  onSelect={setDate}
               />
            </div>
         </div>
         <div className="rounded-[24px] mt-5 flex flex-col bg-white   py-7 px-5">
            <AnalysisGraph />
            {journeyIncomeAnalysis.length > 0 ? (
               <>
                  <div className="mt-6 min-w-full pb-6 relative overflow-y-auto overflow-x-auto">
                     <table className="overflow-auto border-0 m-0 w-full min-w-full">
                        <thead className="border-none font-[500] text-center">
                           <tr className="border-none bg-[#f6f6f6]  overflow-hidden py-[12px] px-3 rounded-md text-[16px] font-[500]">
                              <th className=" py-[14px] rounded-s-[8px] px-3 text-start ">  <p className="text-base font-normal text-[#000000CC]">Date</p></th>
                              <th className=" py-[14px] px-3 text-start ">  <p className="text-base font-normal text-[#000000CC]">Onboarding</p></th>
                              <th className=" py-[14px] px-3 text-start ">      <p className="text-base font-normal text-[#000000CC]">Offboarding</p></th>
                              <th className=" py-[14px] px-3 text-start  rounded-e-[8px]">      <p className="text-base font-normal text-[#000000CC]">Income</p></th>
                           </tr >
                        </thead >
                        {
                           journeyIncomeAnalysis?.length > 0 ? <tbody className="">
                              {journeyIncomeAnalysis.map((data, index) => (
                                 <tr
                                    key={index}
                                    className=" border-b-[2px]  border-[#E9EDF1] ">

                                    <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">
                                       {data.date}
                                    </td >
                                    <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">
                                       {data.onboarding}
                                    </td >
                                    <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">
                                       {data.offboarding}
                                    </td >
                                    <td className="text-[#808080]  py-[12px] px-3 font-normal text-base">
                                       {data.income}
                                    </td>
                                 </tr >
                              ))}
                           </tbody > : null
                        }
                     </table >
                  </div >

                  <div className="flex items-center justify-end mt-auto ">
                     <Link to={"/dashboard"} className="flex px-3 py-2 items-center  text-base font-normal transition-all duration-200 hover:underline hover:text-green-600 gap-2">See more <span className="pt-[2px]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     </span></Link>
                  </div>
               </>
            ) : (
               <Empty message={"Not found data."} />
            )}

         </div>


      </div>

   );
};

export default JourneyAnalysis;
