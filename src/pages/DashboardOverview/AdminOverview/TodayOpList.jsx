import { useState } from "react";
import { Button } from "@/components/ui/button";
import Pagination2 from "@/components/pagination/Pagination2";
import { Ellipsis } from "lucide-react";
import Empty from "@/components/empty/Empty";

const TodayOpList = () => {
   const mockData = [
      { id: 1, doctorName: "Dr. Mohammed Ali", operationType: "Cardiology", time: "10:00 AM", room: "101" },
      { id: 2, doctorName: "Dr. Sara Rahman", operationType: "Neurology", time: "11:00 AM", room: "102" },
      { id: 3, doctorName: "Dr. Sharif Ahmed", operationType: "Orthopedics", time: "12:00 PM", room: "103" },
      { id: 4, doctorName: "Dr. Minhazul Islam", operationType: "Dermatology", time: "01:30 PM", room: "104" },
      { id: 5, doctorName: "Dr. Asma Begum", operationType: "Pediatrics", time: "02:30 PM", room: "105" },
   ];

   const [opData, setOpData] = useState(mockData);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 4;

   const totalPages = Math.ceil(opData.length / itemsPerPage);
   const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
   const currentItems = opData.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   return (
      <div className="bg-[#ffffff] rounded-[8px] p-4">
         <div className="flex items-center w-full justify-between gap-6 flex-col lg:flex-row">
            <h1 className="py-[7px] border-s-4 border-s-skyblue whitespace-nowrap line-clamp-1 px-4 rounded-[4px] text-title text-[24px] font-normal">
               Today&apos;s Operation List
            </h1>
         </div>
         {opData && opData.length > 0 ? (
            <div className="w-full flex flex-col">
               <div className="mt-6 min-w-full relative min-h-[360px] overflow-y-auto overflow-x-auto">
                  <table className="overflow-auto border-0 m-0 w-full min-w-full">
                     <thead className="rounded-md border-none font-[500] text-center">
                        <tr className="border-none bg-[#F8F8F8] rounded-md text-[16px] font-[500]">
                           <th className="ps-6 pe-1 py-5 text-start text-title whitespace-nowrap">SL No</th>
                           <th className="px-6 py-5 text-start text-title">Doctors Name</th>
                           <th className="px-6 py-5 text-start text-title">Time</th>
                           <th className="px-6 py-5 text-start text-title">Operation Type</th>
                           <th className="px-6 py-5 text-start text-title">Room</th>
                           <th className="px-6 py-5 text-end w-full flex items-center justify-end text-title">
                              <Ellipsis />
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white">
                        {currentItems.map((data, index) => (
                           <tr key={data.id} className="bg-white border-b-[2px] border-[#E9EDF1] text-[16px]">
                              <td className="ps-6 pe-1 py-4 text-start font-medium text-des">{indexOfFirstItem + index + 1}</td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">{data.doctorName}</td>
                              <td className="px-6 py-4 text-base font-medium text-start text-des">{data.time}</td>
                              <td className="px-6 py-4 text-base font-medium text-start text-des">{data.operationType}</td>
                              <td className="px-6 py-4 text-start whitespace-nowrap">{data.room}</td>
                              <td className="px-3 py-4 text-end flex items-center justify-end w-full">
                                 <Button variant="ghost" type="button" className="px-3 py-2 text-des rounded-[8px]">
                                    <Ellipsis />
                                 </Button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <Pagination2 currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
         ) : (
            <Empty message={"No Operation available today."} />
         )}
      </div>
   );
};

export default TodayOpList;
