import VmModal from "@/components/modals/HcModal";
import { Checkbox } from "@/components/ui/checkbox";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingTextArea } from "@/components/ui/floating-textarea";
import { useAddTypeMutation, useGetPermissionsQuery } from "@/redux-store/api/user-management-api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import Loading from "@/components/loading/Loading";

const AddUserType = ({ isOpen, setOpen, refetch }) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [addType, { isLoading }] = useAddTypeMutation();
   const { data: permissionData, isLoading: perLoading } = useGetPermissionsQuery(undefined, { skip: !isOpen });

   // State to track selected permissions
   const [selectedPermissions, setSelectedPermissions] = useState([]);

   // Handle permission checkbox toggle
   const handlePermissionChange = (permission) => {
      setSelectedPermissions((prev) =>
         prev.includes(permission)
            ? prev.filter((perm) => perm !== permission)
            : [...prev, permission]
      );
   };

   // Handle form submission
   const handleAddType = async (dept) => {
      try {
         const data = await addType({ ...dept, permissions: selectedPermissions }).unwrap();
         reset();
         setSelectedPermissions([]);
         setOpen(false);
         refetch()
         toast.success(data?.message || "Type added successfully!");

      } catch (err) {
         console.error(err);
         toast.error(err?.data?.message || "Internal Server problem, Please try again.");
      }
   };

   const handleSelectAllChange = (module) => {
      const modulePermissions = module.permissions;
      const allSelected = modulePermissions.every((perm) =>
         selectedPermissions.includes(perm)
      );

      if (allSelected) {
         // Remove all module permissions from selectedPermissions
         setSelectedPermissions((prev) =>
            prev.filter((perm) => !modulePermissions.includes(perm))
         );
      } else {
         // Add all module permissions to selectedPermissions
         setSelectedPermissions((prev) => [
            ...prev,
            ...modulePermissions.filter((perm) => !prev.includes(perm)),
         ]);
      }
   };



   // Handle modal close
   const handleClose = () => {
      setOpen(false);
      reset();
      setSelectedPermissions([]);
   };

   return (
      <VmModal size={"800px"} title={"Add new User Type."} isOpen={isOpen} handleClose={handleClose}>
         <form onSubmit={handleSubmit(handleAddType)} className="w-full">
            <div className="w-full mb-4 space-y-1">
               <FloatingLabelInput
                  id="name"
                  label="User Type"
                  type="text"
                  className={`primary-input ${errors.name ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                  labelClassName={`transition-all duration-300 ${errors.name ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                  {...register("name", {
                     required: "User Type is required",
                  })}
               />
               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="w-full mb-4 space-y-1">
               <FloatingTextArea
                  id="description"
                  label="Description"
                  type="text"
                  className={`primary-input ${errors.description ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                  labelClassName={`transition-all duration-300 ${errors.description ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                  {...register("description")}
               />
            </div>

            <div className="">
               <p className="text-[20px] font-normal text-title text-center">Module Permissions</p>
               {perLoading ? (
                  <Loading />
               ) : (
                  <div className="mt-4 space-y-4">
                     {permissionData?.map((module) => {
                        const isModuleSelected = module.permissions.every((perm) =>
                           selectedPermissions.includes(perm)
                        );

                        return <div key={module._id}>
                           <div className=" flex items-center gap-2 pt-4">
                              <Checkbox
                                 id={module?.module}
                                 checked={isModuleSelected}
                                 onCheckedChange={() => handleSelectAllChange(module)}

                              />
                              <label htmlFor={module?.module} className="font-semibold cursor-pointer text-title text-[18px]">{module.module}</label>
                           </div>


                           <div className="ml-4 mt-3 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                              {module.permissions.map((perm) => (

                                 <div key={perm} className="flex  items-center gap-2 ">
                                    <Checkbox
                                       id={perm}
                                       checked={selectedPermissions.includes(perm)}
                                       onCheckedChange={() => handlePermissionChange(perm)}
                                    />
                                    <label className="cursor-pointer" htmlFor={perm}>{perm}</label>
                                 </div>
                              ))}
                           </div>
                        </div>

                     }

                     )}
                  </div>
               )}
            </div>

            <div className="mt-10 flex items-center justify-end  w-full">
               <div className="w-full max-w-sm mx-auto">
                  <button disabled={isLoading} type="submit" className="primary-btn">
                     {isLoading ? "Submitting..." : "Submit"}
                  </button>
               </div>
            </div>
         </form>
      </VmModal>
   );
};

export default AddUserType;
