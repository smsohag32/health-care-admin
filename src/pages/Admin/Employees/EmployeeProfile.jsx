import { useParams, Link } from "react-router-dom";
import { User, Mail, Printer, Edit, ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetEmployeeQuery } from "@/redux-store/api/user-management-api";
import Empty from "@/components/empty/Empty";
import Loading from "@/components/loading/Loading";
import { handleBack } from "@/utils/helper";
import { handlePrint } from "@/utils/print";

const EmployeeProfile = () => {
   const { id } = useParams();
   const { data: employee, isLoading, isError } = useGetEmployeeQuery(id, {
      skip: !id,
   });




   if (isError) {
      return (
         <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
               <Empty message={"Internal Server Problem"} />
            </CardContent>
         </Card>
      );
   }

   if (isLoading) {
      return (
         <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
               <Loading />
            </CardContent>
         </Card>
      );
   }

   return (
      <div>
         <div onClick={handleBack} className=" top-4 left-4 flex items-center gap-2">
            <Button variant="outline" size="icon">
               <ArrowLeft className="h-4 w-4" />
            </Button>
            Back
         </div>
         <Card id="employee-profile-print" className="w-full mt-4 max-w-4xl mx-auto">
            <CardHeader className="relative p-6">
               <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                     <User className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="text-center md:text-left">
                     <h2 className="text-2xl font-bold text-title">{`${employee?.firstName} ${employee.lastName}`}</h2>
                     <p className="text-des mt-1.5">{employee.phoneNo}</p>
                     <Badge variant="secondary" className="mt-1.5">
                        {employee?.userType?.name}
                     </Badge>

                  </div>
                  <div className="flex-grow" />
                  <div className="flex space-x-2">
                     <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                     </Button>
                     <Button onClick={() => (window.location.href = `mailto:${employee?.email}`)} variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                     </Button>
                     <Button onClick={handlePrint} variant="outline" size="sm">
                        <Printer className="h-4 w-4 mr-2" />
                        Print
                     </Button>
                  </div>
               </div>
            </CardHeader>
            <CardContent className="p-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
                        <p className="text-des">Email: {employee?.email}</p>
                        <p className="text-des">Phone: {employee?.phoneNo}</p>
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Employment Details</h3>
                        <p className="text-des">Employee ID: {employee?.employeeID}</p>
                        <p className="text-des">Department: {employee?.department?.name}</p>
                        <p className="text-des">Status: {employee?.status}</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
                        <p className="text-des">{employee?.address?.street}</p>
                        <p className="text-des">{`${employee?.address?.city}, ${employee.address.state} ${employee?.address?.postalCode}`}</p>
                        <p className="text-des">{employee?.address?.country}</p>
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Emergency Contact</h3>
                        <p className="text-des">{employee?.emergencyContact?.name} ({employee.emergencyContact?.relationship})</p>
                        <p className="text-des">Phone: {employee?.emergencyContact?.phoneNo}</p>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   );
};

export default EmployeeProfile;

