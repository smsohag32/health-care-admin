import { useEffect, useState } from 'react';
import CustomDropdown from '@/components/Dropdown/CustomDropdown';
import CustomPagination from '@/components/pagination/CustomPagination';
import { Button } from '@/components/ui/button';
import { ChartNetwork, Ellipsis, Plus } from 'lucide-react';
import Loading from '@/components/loading/Loading';
import Empty from '@/components/empty/Empty';
import { Link } from 'react-router-dom';

import UserAvatar from '@/components/user-avatar/UserAvatar';
import { useGetDeptQuery } from '@/redux-store/api/deptApi';
import { useGetEmployeesQuery } from '@/redux-store/api/user-management-api';

const DoctorList = () => {
   const { data: doctorsData, isLoading } = useGetEmployeesQuery();
   const { data: deptData, isLoading: deptLoading } = useGetDeptQuery();
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);
   const [selectedDept, setSelectedDept] = useState("");
   const [searchQuery, setSearchQuery] = useState("");
   const [isSearching, setIsSearching] = useState(false);

   const handleDeptSelect = (value) => {
      setSelectedDept(value);
      setIsSearching(true);
   };

   const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      setIsSearching(true);
   };

   const handlePageChange = (page) => {
      setCurrentPage(page);
   };

   const filteredDoctors = doctorsData?.filter((doctor) => {
      const matchesDept = selectedDept === "all" || !selectedDept || doctor?.department?._id === selectedDept;
      const matchesSearch =
         searchQuery === "" ||
         (doctor?.firstName + " " + doctor?.lastName).toLowerCase().includes(searchQuery.toLowerCase()) ||
         doctor?.phoneNo?.includes(searchQuery);
      return matchesDept && matchesSearch;
   }) || [];

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
   }, [selectedDept, searchQuery]);

   return (
      <div className="bg-[#ffffff] rounded-[8px] p-4">
         <div className="flex items-center w-full justify-between gap-6 flex-col lg:flex-row ">
            <h1 className="py-[7px] border-s-4 border-s-skyblue whitespace-nowrap line-clamp-1 px-4 rounded-[4px] text-title text-[24px] font-normal">
               Doctor List
            </h1>
            <div className="flex items-center gap-4">
               <div className="relative w-full text-base">
                  <input
                     onChange={handleSearch}
                     type="text"
                     placeholder="Search doctors..."
                     className="py-[5px] ps-[20px] primary-input text-base pe-5 w-full outline-none border border-[#006837] rounded-[4px]"
                  />
               </div>
               <CustomDropdown
                  onSelect={handleDeptSelect}
                  options={[
                     { value: "all", label: "All" },
                     ...(deptData?.map((dept) => ({ value: dept._id, label: dept.name })) || []),
                  ]}
                  placeholder="Select Dept."
                  icon={<ChartNetwork size={16} className="text-des" />}
                  triggerClassName={"border w-[136px] border-[#B4B4B4]"}
               />
               <Link to={"/dashboard/employee/add"} className="primary-btn flex items-center justify-center py-1.5">
                  <Plus size={16} /> Add Doctor
               </Link>
            </div>
         </div>

         {isLoading || isSearching ? (
            <Loading />
         ) : filteredDoctors && filteredDoctors?.length > 0 ? (
            <div className="w-full flex flex-col">
               <div className="mt-6 min-w-full relative min-h-[400px] overflow-y-auto overflow-x-auto">
                  <table className="overflow-auto border-0 m-0 w-full min-w-full">
                     <thead className="rounded-md border-none font-[500] text-center">
                        <tr className="border-none bg-[#F8F8F8] rounded-md text-[16px] font-[500]">
                           <th className="ps-6 pe-1 py-2 text-start text-title whitespace-nowrap">SL No</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Name</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Phone No</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Department</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Patients Treated</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Total Appointments</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Availability</th>
                           <th className="px-6 py-2 whitespace-nowrap text-start text-title">Address</th>
                           <th className="px-6 flex items-end justify-end py-2 whitespace-nowrap text-end text-title">
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
                                 {data?.patientsTreated || "No Data"}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {data?.totalAppointments || "No Data"}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-des text-start">
                                 {data?.availability || "No Data"}
                              </td>



                              <td className="px-6 py-4 text-base whitespace-nowrap font-medium text-des text-start">
                                 {data?.address?.street}, {data?.address?.city}
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

export default DoctorList;
