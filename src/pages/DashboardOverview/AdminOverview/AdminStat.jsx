import { ArrowUpRight } from "lucide-react";
import op from "@/assets/dashboard/op.png"
import patients from "@/assets/dashboard/patients.png"
const AdminStat = () => {
return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
         <div className=" p-4 rounded-[8px] bg-[#ffffff] border-[1px] border-[#E8F4FA]   ">
            <div className="flex items-center" >
               <span className="bg-[#178CCB1A]  p-4 rounded-[8px] "><img src={patients} className="w-6" alt="Patients" />
               </span>
            </div>
            <div className="mt-[38px] flex items-end gap-4 justify-between">
               <div>
                  <p className="text-title font-normal text-base ">Total Patients</p>
                  <p className="text-title font-normal text-[36px] ">350</p>
               </div>
               <button className="text-des font-normal text-base flex items-center gap-2">View Details <ArrowUpRight /></button>
            </div>
         </div>
         <div className=" p-4 rounded-[8px] bg-[#ffffff] border-[1px] border-[#E8F4FA]   ">
            <div className="flex items-center" >
               <span className="bg-[#E700001A]  p-4 rounded-[8px] "><img src={op} className="w-6" alt="Operation" />
               </span>
            </div>
            <div className="mt-[38px] flex items-end gap-4 justify-between">
               <div>
                  <p className="text-title font-normal text-base ">Today’s Operation</p>
                  <p className="text-title font-normal text-[36px] ">1</p>
               </div>
               <button className="text-des font-normal text-base flex items-center gap-2">View Details <ArrowUpRight /></button>
            </div>
         </div>
      </div>
   );
};

export default AdminStat;
