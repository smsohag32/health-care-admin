import { useState } from "react";
import CustomPagination from "@/components/pagination/CustomPagination";
import { Button } from "@/components/ui/button";
import Pagination2 from "@/components/pagination/Pagination2";

const AppointmentListSection = () => {

   const mockData = [
      { id: 1, name: "Ayesha Sultana", doctor: "Dr. Mohammed Ali", department: "Cardiology", time: "10:00 AM", status: true },
      { id: 2, name: "Jahidul Islam", doctor: "Dr. Sara Rahman", department: "Neurology", time: "11:00 AM", status: false },
      { id: 3, name: "Fatima Khatun", doctor: "Dr. Sharif Ahmed", department: "Orthopedics", time: "12:00 PM", status: true },
      { id: 4, name: "Rahat Hossain", doctor: "Dr. Minhazul Islam", department: "Dermatology", time: "01:30 PM", status: false },
      { id: 5, name: "Suman Roy", doctor: "Dr. Mahbubul Alam", department: "Pediatrics", time: "02:00 PM", status: true },
      { id: 6, name: "Tahmina Begum", doctor: "Dr. Rubina Zaman", department: "Cardiology", time: "03:00 PM", status: true },
      { id: 7, name: "Shahadat Hossain", doctor: "Dr. Ahmed Rafiq", department: "Neurology", time: "04:00 PM", status: false },
      { id: 8, name: "Nabila Parveen", doctor: "Dr. Salim Uddin", department: "Orthopedics", time: "05:00 PM", status: true },
      { id: 9, name: "Abdullah Al Mamun", doctor: "Dr. Noor Zaman", department: "Dermatology", time: "06:30 PM", status: false },
      { id: 10, name: "Meherun Nisa", doctor: "Dr. Imran Khan", department: "Pediatrics", time: "07:00 PM", status: true },
      { id: 11, name: "Imran Hasan", doctor: "Dr. Sara Rahman", department: "Cardiology", time: "08:00 AM", status: true },
      { id: 12, name: "Rina Begum", doctor: "Dr. Sharif Ahmed", department: "Neurology", time: "09:00 AM", status: false },
      { id: 13, name: "Shahidul Alam", doctor: "Dr. Mahbubul Alam", department: "Orthopedics", time: "10:30 AM", status: true },
      { id: 14, name: "Kazi Rakibul Islam", doctor: "Dr. Minhazul Islam", department: "Dermatology", time: "11:30 AM", status: true },
      { id: 15, name: "Fahim Hossain", doctor: "Dr. Rubina Zaman", department: "Pediatrics", time: "01:00 PM", status: false },
      { id: 16, name: "Laila Parveen", doctor: "Dr. Ahmed Rafiq", department: "Cardiology", time: "02:30 PM", status: true },
      { id: 17, name: "Shamsur Rahman", doctor: "Dr. Noor Zaman", department: "Neurology", time: "03:30 PM", status: false },
      { id: 18, name: "Mahiya Akter", doctor: "Dr. Imran Khan", department: "Orthopedics", time: "04:30 PM", status: true },
      { id: 19, name: "Jannat Ara", doctor: "Dr. Sara Rahman", department: "Dermatology", time: "05:30 PM", status: false },
      { id: 20, name: "Mohammad Iqbal", doctor: "Dr. Sharif Ahmed", department: "Pediatrics", time: "06:00 PM", status: true },
      { id: 21, name: "Hossain Jamal", doctor: "Dr. Mahbubul Alam", department: "Cardiology", time: "07:30 AM", status: true },
      { id: 22, name: "Muna Sultana", doctor: "Dr. Rubina Zaman", department: "Neurology", time: "08:30 AM", status: false },
      { id: 23, name: "Rupali Akter", doctor: "Dr. Minhazul Islam", department: "Orthopedics", time: "09:30 AM", status: true },
      { id: 24, name: "Khalid Hassan", doctor: "Dr. Imran Khan", department: "Dermatology", time: "10:00 AM", status: false },
      { id: 25, name: "Shabana Parveen", doctor: "Dr. Ahmed Rafiq", department: "Pediatrics", time: "11:00 AM", status: true }
   ];

   const [aptData, setAptData] = useState(mockData);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;

   const totalPages = Math.ceil(aptData.length / itemsPerPage);
   const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
   const currentItems = aptData.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   const handleStatusChange = (id, currentStatus) => {
      const updatedData = aptData.map((item) =>
         item.id === id ? { ...item, status: !currentStatus } : item
      );
      setAptData(updatedData);
   };

   return (
      <div className="bg-[#ffffff] rounded-[8px] p-4 mt-6">
         <div>
            <h1 className="py-[7px] px-4 rounded-[8px] text-title text-[24px] font-normal">Appointment List</h1>
         </div>
         {aptData && aptData.length > 0 ? (
            <div className="w-full flex flex-col">
               <div className="mt-6  min-w-full relative overflow-y-auto overflow-x-auto">
                  <table className="overflow-auto border-0 m-0 w-full min-w-full">
                     <thead className="rounded-md border-none font-[500] text-center">
                        <tr className="border-none bg-[#F8F8F8] rounded-md text-[16px] font-[500]">
                           <th className="px-6 py-5 text-center text-des whitespace-nowrap">SL No</th>
                           <th className="px-6 py-5 text-start text-des">Patients</th>
                           <th className="px-6 py-5 text-start text-des">Doctor</th>
                           <th className="px-6 py-5 text-center text-des">Department</th>
                           <th className="px-6 py-5 text-center text-des">Time</th>
                           <th className="px-6 py-5 text-center text-des">Action</th>
                        </tr>
                     </thead>
                     <tbody className="bg-white">
                        {currentItems.map((data, index) => (
                           <tr key={data.id} className="bg-white border-b-[2px] border-[#E9EDF1] text-[16px]">
                              <td className="px-6 py-4 text-center font-medium text-[#6C6C6C]">
                                 {indexOfFirstItem + index + 1}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-[#6B6B6B] text-start">
                                 <div className="flex items-center gap-2">
                                    <p>{data.name}</p>
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-[#6B6B6B] text-start">
                                 {data.doctor}
                              </td>
                              <td className="px-6 py-4 text-base font-medium text-center text-[#6B6B6B]">
                                 {data.department}
                              </td>
                              <td className="px-6 py-4 text-center">{data.time}</td>
                              <td className="px-6 py-4 text-center">
                                 <Button
                                    variant="ghost"
                                    type="button"
                                    className="px-3 py-2 rounded-[8px]"
                                    onClick={() => handleStatusChange(data.id, data.status)}
                                 >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
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
               <Pagination2 currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
         ) : (
            <div>No appointments available.</div>
         )}
      </div>
   );
};

export default AppointmentListSection;
