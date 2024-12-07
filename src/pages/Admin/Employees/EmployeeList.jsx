import React, { useState } from 'react';
import CustomDropdown from '@/components/Dropdown/CustomDropdown';
import CustomPagination from '@/components/pagination/CustomPagination';
import { Button } from '@/components/ui/button';
import { useGetEmployeesQuery } from '@/redux-store/api/user-management-api';
import { ChartNetwork, Ellipsis, Plus, PlusCircle, Stethoscope } from 'lucide-react';
import Loading from '@/components/loading/Loading';
import Empty from '@/components/empty/Empty';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import UserAvatar from '@/components/user-avatar/UserAvatar';

const EmployeeList = () => {
   const { data: employeeData, isLoading } = useGetEmployeesQuery();
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);
   const [dept, setDept] = useState([]);

   const handleDeptSelect = (value) => {
      setDept(value);
   };

   const handlePageChange = (page) => {
      setCurrentPage(page);
   };

   // Pagination logic
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = employeeData?.slice(indexOfFirstItem, indexOfLastItem) || [];
   const totalPages = Math.ceil((employeeData?.length || 0) / itemsPerPage);

   return (
      <div className="bg-[#ffffff] rounded-[8px] p-4">
         <div className="flex items-center w-full justify-between gap-6 flex-col lg:flex-row ">
            <h1 className="py-[7px] border-s-4 border-s-skyblue whitespace-nowrap line-clamp-1 px-4 rounded-[4px] text-title text-[24px] font-normal">
               Employee List
            </h1>
            <div className="flex items-center gap-4">
               <div className="relative w-full text-base">
                  <input
                     type="text"
                     placeholder="Search here...."
                     className="py-[5px] ps-[20px] primary-input text-base pe-5 w-full outline-none border border-[#006837] rounded-[4px]"
                  />

               </div>
               <CustomDropdown
                  onSelect={handleDeptSelect}
                  options={dept}
                  placeholder="Select Dept."
                  icon={<ChartNetwork size={16} className="text-des" />}
                  triggerClassName={"border w-[136px] border-[#B4B4B4]"}
               />
               <Link to={"/dashboard/employee/add"} className='primary-btn flex items-center justify-center py-1.5'><Plus size={16} /> Add New</Link>
            </div>
         </div>

         {isLoading ? (
            <Loading />
         ) : employeeData && employeeData.length > 0 ? (
            <div className="w-full flex flex-col">
               <div className="mt-6 min-w-full relative min-h-[400px] overflow-y-auto overflow-x-auto">
                  <table className="overflow-auto border-0 m-0 w-full min-w-full">
                     <thead className="rounded-md border-none font-[500] text-center">
                        <tr className="border-none bg-[#F8F8F8] rounded-md text-[16px] font-[500]">
                           <th className="ps-6 pe-1 py-2 text-start text-title whitespace-nowrap">SL No</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Name</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Phone No</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Department</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">User Type</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Address</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Joining Date</th>
                           <th className="px-6 flex items-end  justify-end py-2 whitespace-nowrap text-end text-title">
                              <Ellipsis />
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white">
                        {currentItems?.map((data, index) => (
                           <tr
                              key={data._id}
                              className="bg-white border-b-[2px] border-[#E9EDF1] text-[16px]"
                           >
                              <td className="ps-6 pe-1 py-4 text-start font-medium text-des">
                                 {indexOfFirstItem + index + 1}
                              </td>
                              <td className="px-6 py-4 text-base flex items-center gap-2 font-medium text-des text-start">
                                 <UserAvatar name={data?.firstName} className="w-4 h-4" />
                                 <Button variant="link" className="px-0" asChild>
                                    <Link to={`/dashboard/employee/${data?._id}`}>
                                       {data?.firstName} {data?.lastName}
                                    </Link>
                                 </Button>
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {data?.phoneNo}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {data?.department?.name}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 <Badge>{data?.userType?.name}</Badge>
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {data?.address?.street}, {data?.address?.city}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {new Date(data?.hireDate).toLocaleDateString()}
                              </td>
                              <td className="px-3 py-4 text-end">
                                 <Button
                                    variant="ghost"
                                    type="button"
                                    className="px-3 py-2 text-des rounded-[8px]"
                                 >
                                    <Ellipsis />
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
            <Empty message={"No employees available."} />
         )}
      </div>
   );
};

export default EmployeeList;
