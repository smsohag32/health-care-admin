import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { handleBack } from "@/utils/helper";
import { ArrowLeft, User } from "lucide-react";
import { useForm } from "react-hook-form";

const AddEmployee = () => {
   const { register, reset, handleSubmit, formState: { errors } } = useForm();

   const handleAddEmp = (newEmp) => {
      console.log("New Employee Data:", newEmp);
      // Call API or perform action with newEmp
   };

   return (
      <div>
         <div className="flex items-center mb-6">
            <Button onClick={handleBack} variant="outline" size="icon" className="mr-2 bg-white">
               <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-normal text-title">Add New Employee</h1>
         </div>
         <Card id="employee-profile-print" className="w-full mt-4 max-w-4xl mx-auto">
            <CardHeader className="relative p-6">
               <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                     <User className="h-24 w-24 text-gray-400" />
                  </div>
               </div>
            </CardHeader>
            <CardContent className="p-6">
               <form className="w-full space-y-6" onSubmit={handleSubmit(handleAddEmp)}>
                  {/* First Name */}
                  <h2 className="text-xl font-semibold text-title">Personal Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="firstName"
                           label="First Name"
                           type="text"
                           placeholder="Enter first name"
                           className={`primary-input ${errors.firstName ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.firstName ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                     </div>
                     {/* Last Name */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="lastName"
                           label="Last Name"
                           type="text"
                           placeholder="Enter last name"
                           className={`primary-input ${errors.lastName ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.lastName ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                     </div>
                     {/* Email */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="email"
                           label="Email"
                           type="email"
                           placeholder="Enter email"
                           className={`primary-input ${errors.email ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.email ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                     </div>
                     {/* Phone Number */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="phoneNo"
                           label="Phone Number"
                           type="text"
                           placeholder="Enter phone number"
                           className={`primary-input ${errors.phoneNo ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.phoneNo ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("phoneNo", { required: "Phone number is required" })}
                        />
                        {errors.phoneNo && <p className="text-red-500 text-xs mt-1">{errors.phoneNo.message}</p>}
                     </div>


                  </div>


                  <h2 className="text-xl font-semibold text-title">Employment Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Department */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="department"
                           label="Department"
                           type="text"
                           placeholder="Enter department ID"
                           className={`primary-input ${errors.department ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.department ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("department", { required: "Department is required" })}
                        />
                        {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                     </div>
                     {/* Job Title */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="jobTitle"
                           label="Job Title"
                           type="text"
                           placeholder="Enter job title"
                           className={`primary-input ${errors.jobTitle ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.jobTitle ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("jobTitle", { required: "Job title is required" })}
                        />
                        {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>}
                     </div>
                     {/* Salary */}
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="salary"
                           label="Salary"
                           type="number"
                           placeholder="Enter salary"
                           className={`primary-input ${errors.salary ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.salary ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("salary", { required: "Salary is required" })}
                        />
                        {errors.salary && <p className="text-red-500 text-xs mt-1">{errors.salary.message}</p>}
                     </div>

                  </div>

                  <h2 className="text-xl font-semibold text-title">Address</h2>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Address Fields */}
                     {["street", "city", "state", "postalCode", "country"].map((field) => (
                        <div key={field} className="w-full mb-4 space-y-1">
                           <FloatingLabelInput
                              id={field}
                              label={field.charAt(0).toUpperCase() + field.slice(1)}
                              type="text"
                              placeholder={`Enter ${field}`}
                              className={`primary-input ${errors[field] ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                              labelClassName={`transition-all bg-white duration-300 ${errors[field] ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                              {...register(`address.${field}`, { required: `${field} is required` })}
                           />
                           {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field].message}</p>}
                        </div>
                     ))}

                  </div>


                  <h2 className="text-xl font-semibold text-title">Emergency Contact</h2>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="emergencyContactName"
                           label="Emergency Contact Person"
                           type="text"
                           placeholder="Enter emergency contact person name"
                           className={`primary-input ${errors.emergencyContactName ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.emergencyContactName ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("emergencyContact.name", { required: "Emergency contact name is required" })}
                        />
                        {errors.emergencyContactName && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactName.message}</p>}
                     </div>
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="emergencyContactRelationship"
                           label="Emergency Contact Relationship"
                           type="text"
                           placeholder="Enter relationship"
                           className={`primary-input ${errors.emergencyContactRelationship ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.emergencyContactRelationship ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("emergencyContact.relationship", { required: "Relationship is required" })}
                        />
                        {errors.emergencyContactRelationship && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactRelationship.message}</p>}
                     </div>
                     <div className="w-full mb-4 space-y-1">
                        <FloatingLabelInput
                           id="emergencyContactPhone"
                           label="Emergency Contact Phone"
                           type="text"
                           placeholder="Enter phone number"
                           className={`primary-input ${errors.emergencyContactPhone ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                           labelClassName={`transition-all bg-white duration-300 ${errors.emergencyContactPhone ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                           {...register("emergencyContact.phoneNo", { required: "Phone number is required" })}
                        />
                        {errors.emergencyContactPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactPhone.message}</p>}
                     </div>
                  </div>

                  <div className="w-full col-span-2 py-4  max-w-sm  mx-auto text-right">
                     <button type="submit" className="primary-btn">
                        Add Employee
                     </button>
                  </div>
               </form>
            </CardContent>
         </Card>
      </div>
   );
};

export default AddEmployee;
