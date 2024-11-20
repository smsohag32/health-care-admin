import VmModal from "@/components/modals/HcModal";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-input";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AddDept = ({ isOpen, setOpen }) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm()
   const [profile, setProfile] = useState(null);

   const imageInputRef = useRef(null);

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





   const handleAddDept = (dept) => {
      console.log(dept)
   }




   const handleClose = () => {
      setOpen(false)
      reset()
   }
   return (

      <VmModal size={"680px"} title={"Add new department."} isOpen={isOpen} handleClose={handleClose} >
         <form onSubmit={handleSubmit(handleAddDept)} className="w-full" >
            <div className="w-full mb-4">


               {/* profile picture  */}
               <div onClick={handleProfileClick} className="h-[123px] cursor-pointer hover:bg-gray-400 transition-all duration-300 w-[123px] rounded-full border-primary border  flex items-center justify-center overflow-hidden">
                  {profile ? <img className="w-[123px] h-[123px] object-cover" src={URL.createObjectURL(profile)} /> : <p className="flex items-center justify-center"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 7.87722C1.5 7.5269 1.5 7.35174 1.51462 7.20421C1.6556 5.78127 2.78127 4.6556 4.20421 4.51462C4.35174 4.5 4.53636 4.5 4.90558 4.5C5.04785 4.5 5.11899 4.5 5.17939 4.49634C5.95061 4.44963 6.62595 3.96288 6.91414 3.246C6.93671 3.18986 6.95781 3.12657 7 3C7.04219 2.87343 7.06329 2.81014 7.08586 2.754C7.37405 2.03712 8.04939 1.55037 8.82061 1.50366C8.88101 1.5 8.94772 1.5 9.08114 1.5H13.9189C14.0523 1.5 14.119 1.5 14.1794 1.50366C14.9506 1.55037 15.626 2.03712 15.9141 2.754C15.9367 2.81014 15.9578 2.87343 16 3C16.0422 3.12657 16.0633 3.18986 16.0859 3.246C16.374 3.96288 17.0494 4.44963 17.8206 4.49634C17.881 4.5 17.9521 4.5 18.0944 4.5C18.4636 4.5 18.6483 4.5 18.7958 4.51462C20.2187 4.6556 21.3444 5.78127 21.4854 7.20421C21.5 7.35174 21.5 7.5269 21.5 7.87722V15.7C21.5 17.3802 21.5 18.2202 21.173 18.862C20.8854 19.4265 20.4265 19.8854 19.862 20.173C19.2202 20.5 18.3802 20.5 16.7 20.5H6.3C4.61984 20.5 3.77976 20.5 3.13803 20.173C2.57354 19.8854 2.1146 19.4265 1.82698 18.862C1.5 18.2202 1.5 17.3802 1.5 15.7V7.87722Z" stroke="url(#paint0_linear_941_1231)" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                     <path d="M11.5 16C13.7091 16 15.5 14.2091 15.5 12C15.5 9.79086 13.7091 8 11.5 8C9.29086 8 7.5 9.79086 7.5 12C7.5 14.2091 9.29086 16 11.5 16Z" stroke="url(#paint1_linear_941_1231)" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                     <defs>
                        <linearGradient id="paint0_linear_941_1231" x1="1.5" y1="1.5" x2="20.475" y2="21.4737" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#8C3493" />
                           <stop offset="1" stopColor="#431879" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_941_1231" x1="1.5" y1="1.5" x2="20.475" y2="21.4737" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#8C3493" />
                           <stop offset="1" stopColor="#431879" />
                        </linearGradient>
                     </defs>
                  </svg>
                  </p>}

               </div>



               <input type="file" accept="image/*" ref={imageInputRef} className="hidden" onChange={handleImageChange} />

               <Button onClick={handleProfileClick} type="button" variant="secondary" className="mt-2" >Upload Photo</Button>
            </div>
            <div className="w-full mb-4 space-y-1">

               <FloatingLabelInput
                  id="deptName"
                  label="Full Name"
                  type="text"

                  className={`primary-input ${errors.deptName ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-[#8C3493] focus:ring-[#8C3493] border-[#8C3493]"}`}
                  labelClassName={`transition-all duration-300 ${errors.deptName ? "text-red-500" : "text-gray-500 peer-focus:text-[#8C3493]"}`}
                  {...register("deptName", {
                     required: "Full name is required",
                  })}
               />
               {errors.deptName && <p className="text-red-500 text-xs mt-1">{errors.deptName.message}</p>}
            </div>
        
            <div className="mt-6 flex  items-center justify-end w-full">
               <div>
                  <button type="submit" className="primary-btn">Submit</button>
               </div>
            </div>
         </form>
      </VmModal>
   );
};

export default AddDept;
