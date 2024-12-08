import Empty from "@/components/empty/Empty";

import CustomPagination from "@/components/pagination/CustomPagination";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { useState } from "react";
import AddDept from "./AddDept";
import { useGetDeptQuery } from "@/redux-store/api/deptApi";
import Loading from "@/components/loading/Loading";

const Departments = () => {
   const { data: departmentData = [], isLoading } = useGetDeptQuery();

   const [isAdd, setAdd] = useState(false)
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;
   const totalPages = Math.ceil(departmentData.length / itemsPerPage);
   const handlePageChange = (page) => {
      setCurrentPage(page);
   };
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = departmentData.slice(indexOfFirstItem, indexOfLastItem);

   const handleStatusChange = (id, currentStatus) => {
   };

   return (
      <div>
         <div className="flex items-center justify-between">
            <h1 className="font-normal text-[24px]">Department List</h1>
            <div>
               <button onClick={() => setAdd(true)} className="primary-bg w-full  py-[8px] px-6  text-base flex items-center gap-2 justify-center font-normal text-white rounded-[8px]">
                  Department
                  <span className="flex items-center justify-center">
                     <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M9.5 1V17M17.5 9H1.5"
                           stroke="#FEF7FF"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </span>
               </button>
            </div>
         </div>
         <div className="w-full">
            {

               isLoading ? <Loading /> : <>
                  {departmentData.length > 0 ? (
                     <div className="w-full flex  flex-col ">
                        <div className="mt-6 min-h-[68vh] min-w-full relative overflow-y-auto overflow-x-auto">
                           <table className="overflow-auto border-0 m-0 w-full min-w-full">
                              <thead className="rounded-md border-none font-[500] text-center">
                                 <tr className="border-none bg-[#e3e3e4a8] rounded-md text-[16px] font-[500]">
                                    <th className="px-6 py-3 text-center text-title whitespace-nowrap">SL No</th>
                                    <th className="px-6 py-3 text-start text-title">Department Name</th>
                                    <th className="px-6 py-3 text-start text-title">Dept Code</th>
                                    <th className="px-6 py-3 text-center text-title">Status</th>
                                    <th className="px-6 py-3 text-center text-title">Action</th>
                                 </tr>
                              </thead>
                              <tbody className="bg-white">
                                 {currentItems.map((data, index) => (
                                    <tr
                                       key={data.id}
                                       className="bg-white border-b-[2px] border-[#E9EDF1] text-[16px]"
                                    >
                                       <td className="px-6 py-4 text-center font-medium text-[#6C6C6C]">
                                          {indexOfFirstItem + index + 1}
                                       </td>
                                       <td className="px-6 py-4 text-base font-medium text-[#6B6B6B] text-start">
                                          <div className="flex items-center gap-2">
                                             <p>{data?.name}</p>
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 text-base font-medium text-[#6B6B6B] text-start">
                                          {data?.deptID}
                                       </td>

                                       <td className="px-6 py-4 text-base font-medium text-center text-[#6B6B6B]">
                                          <div className="flex items-center min-w-[120px] justify-center gap-3">
                                             <Switch
                                                id={`status-${data.id}`}
                                                checked={data.status}
                                                onCheckedChange={() => handleStatusChange(data.id, data.status)}
                                             />
                                             <span className="text-gray-600 text-sm">
                                                ({data.status ? "Active" : "In-active"})
                                             </span>
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 text-center">
                                          <Button
                                             variant="ghost"
                                             type="button"
                                             className="px-3 py-2 rounded-[8px]"
                                          >
                                             <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                             >
                                                <path
                                                   d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                />
                                                <path
                                                   d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                />
                                                <path
                                                   d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                />
                                             </svg>
                                          </Button>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        <CustomPagination
                           currentPage={currentPage}
                           totalPages={totalPages}
                           onPageChange={handlePageChange}
                        />
                     </div>
                  ) : (
                     <Empty message={"No dept found."} />
                  )}</>
            }

         </div>

         <AddDept isOpen={isAdd} setOpen={setAdd}></AddDept>
      </div>
   );
};

export default Departments;
