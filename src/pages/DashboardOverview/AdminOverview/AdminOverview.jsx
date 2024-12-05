import Graph from "@/assets/svg/Graph";
import { ArrowUpRight, ChartPie } from "lucide-react";
import AdminStat from "./AdminStat";
import SideTabs from "./SideTabs";
import AppointmentListSection from "./AppointmentListSection";

const AdminOverview = () => {
   return (
      <div>
         <div className="bg-[#178CCB] flex items-center justify-between gap-6 py-4 rounded-[12px] px-6 text-white">
            <div className="flex items-center gap-6">
               <span className="bg-[##FFFFFF1A] w-10 h-10 rounded-full flex items-center text-[24px] justify-center bg-blue-100 bg-opacity-20">৳</span>
               <div>
                  <p className="text-[20px] text-[#E8F4FA] font-normal">Total Earnings</p>
                  <p className="text-[24px] font-normal flex gap-2 items-center">Total Earnings of this month is <span className="font-semibold flex items-center gap-2 rounded-[1px]">12,34,556 <span className="p-1 bg-white"><Graph /></span></span></p>
               </div>
            </div>
            <button className="bg-[#E8F4FA] text-[#178CCB]  rounded-[24px] py-3 px-4 font-semibold  flex items-center gap-2 ">View Details <ArrowUpRight /> </button>
         </div>

         <div className="mt-6 grid h-auto lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="w-full lg:col-span-2 h-auto">
               <AdminStat />
               <AppointmentListSection />
            </div>
            <div className="w-full h-auto">
               <SideTabs />
            </div>
         </div>
         <div className="mt-6 grid h-auto lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="w-full h-auto">
               <div className=" p-4 rounded-[8px] bg-[#ffffff] border-[1px] border-[#E8F4FA]   ">
                  <div className="flex items-center" >
                     <span className="bg-[#178CCB1A]  p-4 rounded-[8px] ">
                        <ChartPie className="text-base text-[#0555BC]" />
                     </span>
                  </div>
                  <div className="mt-[20px] flex items-center justify-center ">
                     <button className="rounded-[2rem] font-normal text-base flex bg-[#DEF3FF] px-4 py-2 text-skyblue items-center gap-2">View Details <ArrowUpRight /></button>
                  </div>
               </div>
            </div>
            <div className="w-full lg:col-span-2 h-auto">
               <AppointmentListSection />
            </div>
         </div>
      </div>
   );
};

export default AdminOverview;
