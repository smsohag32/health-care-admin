import VmModal from "@/components/modals/HcModal";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useAddDeptMutation } from "@/redux-store/api/deptApi";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddDept = ({ isOpen, setOpen }) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [addDept, { isLoading }] = useAddDeptMutation()




   const handleAddDept = async (dept) => {
      try {
         const data = await addDept(dept).unwrap()
         reset()
         setOpen(false);
         toast.success(data?.message || "Department added successfully!");
      } catch (err) {
         console.log(err)
         toast.error(err?.data?.message || "Internal Server problem, Please try again.")
      }
   }




   const handleClose = () => {
      setOpen(false)
      reset()
   }
   return (

      <VmModal size={"680px"} title={"Add new department."} isOpen={isOpen} handleClose={handleClose} >
         <form onSubmit={handleSubmit(handleAddDept)} className="w-full" >

            <div className="w-full mb-4 space-y-1">
               <FloatingLabelInput
                  id="name"
                  label="Department Name"
                  type="text"

                  className={`primary-input ${errors.name ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                  labelClassName={`transition-all duration-300 ${errors.name ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                  {...register("name", {
                     required: "Department  name is required",
                  })}
               />
               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="w-full mb-4 space-y-1">
               <FloatingLabelInput
                  id="description"
                  label="Description"
                  type="text"

                  className={`primary-input ${errors.description ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-gray-400 focus:ring-skyblue border-gray-400"}`}
                  labelClassName={`transition-all duration-300 ${errors.description ? "text-red-500" : "text-gray-500 peer-focus:text-skyblue]"}`}
                  {...register("description")}
               />
            </div>

            <div className="mt-6 flex  items-center justify-end w-full">
               <div>
                  <button disabled={isLoading} type="submit" className="primary-btn">Submit</button>
               </div>
            </div>
         </form>
      </VmModal>
   );
};

export default AddDept;
