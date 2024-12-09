import CustomDropdown from "@/components/Dropdown/CustomDropdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useGetDeptQuery } from "@/redux-store/api/deptApi";
import { useAddEmployeeMutation, useGetUserTypeQuery } from "@/redux-store/api/user-management-api";
import { handleBack } from "@/utils/helper";
import { ArrowLeft, ChartNetwork, User, UserCheck } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddEmployee = () => {

   const imageInputRef = useRef()
   const [profile, setProfile] = useState(null)
   const { data: userTypeData } = useGetUserTypeQuery()
   const [addEmployee, { isLoading }] = useAddEmployeeMutation()
   const { register, reset, handleSubmit, formState: { errors } } = useForm();
   const { data: deptData } = useGetDeptQuery()
   const [selectDept, setSelectDept] = useState("")
   const [selectType, setSelectType] = useState("")

   const handleAddEmp = async (emp) => {

      const newEmp = { department: selectDept, userType: selectType, ...emp }

      try {
         const data = await addEmployee(newEmp).unwrap()
         reset()

         toast.success(data?.message)
         handleBack()
      } catch (err) {
         toast.error(err?.data.message)
      }

   };

   const handleDeptSelect = (dept) => {
      setSelectDept(dept)

   }

   const handleUserType = (type) => {
      setSelectType(type)
   }

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setProfile(file)
      }
   }

   const handleProfileClick = () => {
      if (imageInputRef.current) {
         imageInputRef.current.click()
      }
   }



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
               <div className="flex items-center flex-col justify-between">
                  <div onClick={handleProfileClick} className="h-[123px] cursor-pointer hover:bg-gray-200 transition-all duration-300 w-[123px] rounded-full border-primary border  flex items-center justify-center overflow-hidden">
                     {profile ? <img className="w-[123px] h-[123px] object-cover" src={URL.createObjectURL(profile)} /> : <p className="flex items-center justify-center"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 7.87722C1.5 7.5269 1.5 7.35174 1.51462 7.20421C1.6556 5.78127 2.78127 4.6556 4.20421 4.51462C4.35174 4.5 4.53636 4.5 4.90558 4.5C5.04785 4.5 5.11899 4.5 5.17939 4.49634C5.95061 4.44963 6.62595 3.96288 6.91414 3.246C6.93671 3.18986 6.95781 3.12657 7 3C7.04219 2.87343 7.06329 2.81014 7.08586 2.754C7.37405 2.03712 8.04939 1.55037 8.82061 1.50366C8.88101 1.5 8.94772 1.5 9.08114 1.5H13.9189C14.0523 1.5 14.119 1.5 14.1794 1.50366C14.9506 1.55037 15.626 2.03712 15.9141 2.754C15.9367 2.81014 15.9578 2.87343 16 3C16.0422 3.12657 16.0633 3.18986 16.0859 3.246C16.374 3.96288 17.0494 4.44963 17.8206 4.49634C17.881 4.5 17.9521 4.5 18.0944 4.5C18.4636 4.5 18.6483 4.5 18.7958 4.51462C20.2187 4.6556 21.3444 5.78127 21.4854 7.20421C21.5 7.35174 21.5 7.5269 21.5 7.87722V15.7C21.5 17.3802 21.5 18.2202 21.173 18.862C20.8854 19.4265 20.4265 19.8854 19.862 20.173C19.2202 20.5 18.3802 20.5 16.7 20.5H6.3C4.61984 20.5 3.77976 20.5 3.13803 20.173C2.57354 19.8854 2.1146 19.4265 1.82698 18.862C1.5 18.2202 1.5 17.3802 1.5 15.7V7.87722Z" stroke="url(#paint0_linear_941_1231)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.5 16C13.7091 16 15.5 14.2091 15.5 12C15.5 9.79086 13.7091 8 11.5 8C9.29086 8 7.5 9.79086 7.5 12C7.5 14.2091 9.29086 16 11.5 16Z" stroke="url(#paint1_linear_941_1231)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                           <linearGradient id="paint0_linear_941_1231" x1="1.5" y1="1.5" x2="20.475" y2="21.4737" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0ea8f0" />
                              <stop offset="1" stopColor="#0ea8f0" />
                           </linearGradient>
                           <linearGradient id="paint1_linear_941_1231" x1="1.5" y1="1.5" x2="20.475" y2="21.4737" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0ea8f0" />
                              <stop offset="1" stopColor="#0ea8f0" />
                           </linearGradient>
                        </defs>
                     </svg>
                     </p>}
                  </div>
                  <input type="file" accept="image/*" ref={imageInputRef} className="hidden" onChange={handleImageChange} />
                  <Button onClick={handleProfileClick} type="button" variant="secondary" className="mt-2" >Upload Photo</Button>
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
                        <CustomDropdown
                           onSelect={handleDeptSelect}
                           options={deptData?.map(dept => ({ value: dept._id, label: dept.name }))}
                           placeholder="Select Dept."
                           icon={<ChartNetwork size={16} className="text-des text-start" />}
                           triggerClassName={"border w-[136px]  !py-6  border-[#B4B4B4] text-start"} />
                     </div>
                     <div className="w-full mb-4 space-y-1">
                        <CustomDropdown
                           onSelect={handleUserType}
                           options={userTypeData?.map(userType => ({ value: userType._id, label: userType.name }))}
                           placeholder="Select User Type / Job Type"
                           icon={<UserCheck size={16} className="text-des text-start" />}
                           triggerClassName={"border w-[136px]  !py-6  border-[#B4B4B4] text-start"} />
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
                     <button disabled={isLoading} type="submit" className="primary-btn">
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
