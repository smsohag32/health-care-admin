
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
import Empty from "@/components/empty/Empty";
import { useState } from "react";
import { Link } from "react-router-dom";

const StationOnboarding = () => {

   const [date, setDate] = useState(new Date())
   const onboardingData = [
      { date: "09/11/24", passengers: 120 },
      { date: "08/11/24", passengers: 85 },
      { date: "07/11/24", passengers: 50 },
      { date: "06/11/24", passengers: 200 },
      { date: "05/11/24", passengers: 75 },
      { date: "04/11/24", passengers: 150 },
      { date: "03/11/24", passengers: 100 },
      { date: "02/11/24", passengers: 45 },
      { date: "01/11/24", passengers: 110 },
   ];


   return (
      <div className="rounded-[24px] h- flex flex-col bg-white primary-shadow bg-opacity-45 py-6 px-5">
         <div className="flex items-center justify-between gap-4">
            <p className="text-[20px] text-[#000000CC]">Passengers Onboarding</p>
            <div>
               <CustomDropdown
                  isDatePicker={true}
                  selectedValue={date}
                  triggerClassName={"border-[#808080]"}
                  onSelect={setDate}
               />
            </div>
         </div>

         {onboardingData.length > 0 ? (
            <>


               <div className="mt-6 min-w-full pb-6 relative overflow-y-auto overflow-x-auto">
                  <table className="overflow-auto border-0 m-0 w-full min-w-full">
                     <thead className="border-none font-[500] text-center">
                        <tr className="border-none bg-[#f6f6f6] py-[12px] px-3 rounded-md text-[16px] font-[500]">
                           <th className=" py-[14px] px-3 text-start text-[#808080]">  <p className="text-base font-normal text-[#000000CC]">Date</p></th>
                           <th className=" py-[14px] px-3 text-start text-[#808080]">  <p className="text-base font-normal text-[#000000CC]"></p></th>
                           <th className=" py-[14px] px-3 text-start text-[#808080]">  <p className="text-base font-normal text-[#000000CC]"></p></th>
                           <th className=" py-[14px] px-3 text-start text-[#808080]">      <p className="text-base font-normal text-[#000000CC]">Passengers</p></th>
                        </tr >
                     </thead >
                     {
                        onboardingData?.length > 0 ? <tbody className="">
                           {onboardingData.map((data, index) => (
                              <tr
                                 key={index}
                                 className=" border-b-[2px]  border-[#E9EDF1] ">

                                 <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">
                                    {data.date}
                                 </td >
                                 <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">

                                 </td >
                                 <td className="text-[#808080]   py-[12px] px-3 font-normal text-base">

                                 </td >
                                 <td className="text-[#808080]  py-[12px] px-3 font-normal text-base">
                                    {data.passengers}
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
   );
};

export default StationOnboarding;
