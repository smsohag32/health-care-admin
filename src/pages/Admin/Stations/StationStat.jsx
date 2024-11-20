
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
import { useGetUserQuery } from "@/redux-store/api/userApi";
import { CreditCard, TabletSmartphone, UserRound } from "lucide-react";
import { useState } from "react";

const StationStat = ({ stationStatData }) => {
   const [date, setDate] = useState(new Date());
   const [timeframe, setTimeframe] = useState("Daily");


   const { data, error } = useGetUserQuery({ id: "+8801977763644" }, { refetchOnMountOrArgChange: true });

   // Log error for debugging
   if (error) console.error("Error fetching user data:", error);

   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="rounded-[16px] primary-gradient px-6 pt-6 pb-4 text-white primary-shadow">
            <div className="flex justify-between  flex-wrap gap-2">
               <p className="text-[20px] text-[#FDFDFD]">Income</p>
               <div className="flex items-center gap-2">
                  <CustomDropdown
                     placeholder="Daily"
                     options={["Daily", "Weekly", "Monthly", "Yearly"]}
                     selectedValue={timeframe}
                     onSelect={setTimeframe}
                  />

                  <CustomDropdown
                     isDatePicker={true}
                     selectedValue={date}
                     onSelect={setDate}
                  />
               </div>
            </div>
            <div className="flex items-center mt-6 justify-between">
               <div className="flex items-center justify-center">
                  <span className="p-3 w-[48px] text-center flex items-center justify-center h-[48px] bg-white primary-text rounded-[8px] text-[28px]">৳</span>
               </div>
               <p className="text-[40px] font-normal text-[#FDFDFD]">{stationStatData?.income || 0}</p>
            </div>
            <span>
               <svg width="378" height="74" viewBox="0 0 378 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.334229 22.4054L29.3085 49.6486L58.2828 73L87.2571 63.2703L116.231 10.7297L145.206 39.9189L174.18 59.3784L203.154 45.7568L232.129 53.5405L261.103 20.4595L290.077 1L319.051 12.6757L348.026 16.5676L377 30.1892M377 30.1892V30.1892Z" stroke="#ECECEC" />
               </svg>
            </span>
         </div>
         <div className="rounded-[16px] border border-[#3586FF] bg-[#3586ff05] px-6 pt-6 pb-4  primary-shadow">
            <div className="flex justify-between  flex-wrap gap-2">
               <p className="text-[20px] ">Passengers</p>
               <div className="flex items-center gap-2">
                  <CustomDropdown
                     placeholder="Daily"
                     triggerClassName={"border-[#808080]"}
                     options={["Daily", "Weekly", "Monthly", "Yearly"]}
                     selectedValue={timeframe}
                     onSelect={setTimeframe}
                  />

                  <CustomDropdown
                     triggerClassName={"border-[#808080]"}
                     isDatePicker={true}
                     selectedValue={date}
                     onSelect={setDate}
                  />
               </div>
            </div>
            <div className="flex items-center mt-6 justify-between">
               <div className="flex items-center justify-center">
                  <span className="p-3 w-[48px] text-center flex items-center justify-center h-[48px] bg-[#3586FF1A] primary-text rounded-[8px] text-[28px]"><UserRound /></span>
               </div>
               <p className="text-[40px] font-normal">{stationStatData?.passengers || 0}</p>
            </div>
            <span>
               <svg width="100%" height="74" viewBox="0 0 100% 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 30.1892L30.2308 20.4595L59.4615 39.9189L88.6923 1L117.923 63.2703L147.154 22.4054L176.385 53.5405L205.615 12.6757L234.846 45.7568L264.077 16.5676L293.308 73L322.538 59.3784L351.769 10.7297L381 49.6486M381 49.6486V49.6486Z" stroke="#3586FF" />
               </svg>

            </span>
         </div>
         <div className="rounded-[16px] border border-[#FF9500] bg-[#FF95000D] px-6 pt-6 pb-4  primary-shadow">
            <div className="flex justify-between  flex-wrap gap-2">
               <p className="text-[20px] ">Bank Debit</p>
               <div className="flex items-center gap-2">
                  <CustomDropdown
                     placeholder="Daily"
                     options={["Daily", "Weekly", "Monthly", "Yearly"]}
                     triggerClassName={"border-[#808080]"}
                     selectedValue={timeframe}
                     onSelect={setTimeframe}
                  />

                  <CustomDropdown
                     isDatePicker={true}
                     selectedValue={date}
                     triggerClassName={"border-[#808080]"}
                     onSelect={setDate}
                  />
               </div>
            </div>
            <div className="flex items-center mt-6 justify-between">
               <div className="flex items-center justify-center">
                  <span className="p-3 w-[48px] text-center flex text-[#FF9500] items-center justify-center h-[48px] bg-[#FFE8D3]  rounded-[8px] text-[28px]"><CreditCard /></span>
               </div>
               <p className="text-[40px] font-normal">{stationStatData?.bankDebit || 0}</p>
            </div>
            <span>
               <svg width="100%" height="74" viewBox="0 0 100% 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 30.1892L30.2308 20.4595L59.4615 39.9189L88.6923 1L117.923 63.2703L147.154 22.4054L176.385 53.5405L205.615 12.6757L234.846 45.7568L264.077 16.5676L293.308 73L322.538 59.3784L351.769 10.7297L381 49.6486M381 49.6486V49.6486Z" stroke="#3586FF" />
               </svg>

            </span>
         </div>

         <div className="rounded-[16px] border border-[#9600EE] bg-[#9600EE0D] px-6 pt-6 pb-4  primary-shadow">
            <div className="flex justify-between  flex-wrap gap-2">
               <p className="text-[20px] ">MFS Debit</p>
               <div className="flex items-center gap-2">
                  <CustomDropdown
                     placeholder="Daily"
                     options={["Daily", "Weekly", "Monthly", "Yearly"]}
                     triggerClassName={"border-[#808080]"}
                     selectedValue={timeframe}
                     onSelect={setTimeframe}
                  />

                  <CustomDropdown
                     isDatePicker={true}
                     selectedValue={date}
                     triggerClassName={"border-[#808080]"}
                     onSelect={setDate}
                  />
               </div>
            </div>
            <div className="flex items-center mt-6 justify-between">
               <div className="flex items-center justify-center">
                  <span className="p-3 w-[48px] text-center flex text-[#9600EE] items-center justify-center h-[48px] bg-[#F1DAFF]  rounded-[8px] text-[28px]"><TabletSmartphone /></span>
               </div>
               <p className="text-[40px] font-normal">{stationStatData?.mfsDebit || 0}</p>
            </div>
            <span>
               <svg width="100%" height="76" viewBox="0 0 100% 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 21.4595L30.2308 13.6757L59.4615 54.5405L88.6923 64.2703L117.923 2L147.154 50.6486L176.385 31.1892L205.615 40.9189L234.846 46.7568L264.077 11.7297L293.308 23.4054L322.538 74L351.769 17.5676L381 60.3784M381 60.3784V60.3784Z" stroke="#9600EE" />
               </svg>

            </span>
         </div>
      </div>
   );
};

export default StationStat;
