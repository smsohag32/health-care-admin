import logo from "@/assets/icons/logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useState } from "react";
import { ExternalLink, Eye, EyeOff, Users } from "lucide-react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux-store/slice/authSlice";
import { toast } from "sonner";
import loginImage from "@/assets/login/loginImage.webp"


const Login = () => {

   const navigate = useNavigate();
   const [loading, setLoading] = useState(false)
   const dispatch = useDispatch()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const [passwordVisible, setPasswordVisible] = useState(false);
   const [loginError, setLoginError] = useState(null);

   const onSubmit = async (data) => {
      const { userId, password } = data;
      setLoading(true);
      try {
         const resultAction = await dispatch(loginUser({ userId, password })).unwrap();

         if (resultAction) {
            toast.success("Login successful");
            navigate("/dashboard");
         } else {
            console.log(resultAction)
            toast.error(`${resultAction?.message}`);
         }
      } catch (error) {
         if (error.response && error.response.status === 400) {
            toast.error("Login failed: ", error.response.data || "Invalid login credentials");
         } else {
            toast.error("Login failed due to an unexpected error");
         }
      } finally {
         setLoading(false);
      }
   };


   return (
      <div className="min-h-screen flex w-full">
         <div className="absolute top-0 left-0 right-0 main-container w-full z-50 flex items-center justify-end">
            <div className="px-3">
               <button className=" py-3 bg-blue-900 text-white px-5 flex items-center gap-3 rounded-b-lg">Patient Portal <ExternalLink size={16} /></button>
            </div>
         </div>

         <div className="flex items-center flex-col lg:flex-row gap-6   w-full main-container">
            <div className=" flex items-center relative justify-center  w-full  rounded-e-[56rem]">
               <div className="w-full  z-50 flex items-center justify-center  px-6">
                  <img className="max-w-md" src={loginImage} alt="Health Care" />
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
                     <Users className="h-5 w-5 text-blue-600" />
                     <span className="text-sm font-medium">1k Customers</span>
                     <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                           <div
                              key={i}
                              className="h-6 w-6 rounded-full border-2 border-white bg-gray-200"
                           />
                        ))}
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
                     <span className="text-sm font-medium">Connect with a Doctor</span>
                  </div>
               </div>
            </div>



            <div className="flex items-center justify-end flex-col main-container  w-full ">
               <div className="w-full ml-auto  max-w-md bg-white rounded-[8px] px-8 py-14 space-y-6">
                  <div className="flex flex-col items-center justify-center mb-4">
                     <img src={logo} alt="Health Care BD Logo" className="h-20 w-20" />
                     <p className="text-des font-normal text-base mt-2">Welcome Back to Health Care</p>
                  </div>
                  <p className="text-start text-2xl pb-3 font-normal text-gray-700">Sing in your account</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                     <div className="w-full">
                        <FloatingLabelInput
                           id="userId"
                           placeholder="Phone Number or User ID"
                           label="Enter Your Phone Number or User ID"
                           type="text"
                           defaultValue={"+8801540042699"}
                           className={`primary-input ${errors.userId ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-[#178ccbd0] focus:ring-[#178ccbd0] border-[#178ccbd0]"}`}
                           labelClassName={`transition-all duration-300 ${errors.userId ? "text-red-500" : "text-gray-500 peer-focus:text-[#178ccbd0]"}`}
                           {...register("userId", {
                              required: "Phone number or User ID is required",
                              pattern: {
                                 value: /^(?:\+8801|01)[3-9]\d{8}$|^[a-zA-Z0-9]{5,20}$/,
                                 message: "Invalid Bangladeshi phone number or User ID format",
                              },
                           })}
                        />
                        {errors.userId && <p className="text-red-500 text-xs mt-1">{errors.userId.message}</p>}
                     </div>

                     <div className=" mt-5">
                        <div className="w-full relative">
                           <FloatingLabelInput
                              id="password"
                              label="Password"
                              type={passwordVisible ? "text" : "password"}
                              placeholder="******"
                              defaultValue={"11223344"}
                              className={`primary-input ${errors.password ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-[#178ccbd0] focus:ring-[#178ccbd0] border-[#178ccbd0]"}`}
                              labelClassName={`transition-all duration-300 ${errors.password ? "text-red-500" : "text-gray-500 peer-focus:text-[#178ccbd0]"}`}
                              {...register("password", {
                                 required: "Password is required",
                                 minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                 },
                              })}
                           />

                           {/* Toggle Password Visibility */}
                           <button
                              type="button"
                              onClick={() => setPasswordVisible(!passwordVisible)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                           >
                              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                           </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                     </div>

                     {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

                     <div className="flex items-center justify-between pb-4 text-sm">
                        <label className="flex cursor-pointer items-center">
                           <input type="checkbox" className="mr-2 cursor-pointer" />
                           Remember Me
                        </label>
                        <Link className="text-[#178CCB] hover:underline">
                           Forgot Password?
                        </Link>
                     </div>

                     <button
                        type="submit"
                        className={`w-full py-2  rounded-md text-white font-medium disabled:opacity-60 bg-[#178CCB] hover:bg-[#178CCB] transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                     >
                        {loading ? "Loading..." : "Log In"}
                     </button>
                  </form>
               </div>
            </div>

         </div>

      </div>
   );
};

export default Login;
