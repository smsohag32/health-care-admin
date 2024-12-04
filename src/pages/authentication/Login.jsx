import loginImage from "@/assets/icons/logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useState, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "@/context/AuthProvider";

const Login = () => {
   const { logIn, loginLoading } = useContext(AuthContext);
   const navigate = useNavigate();
   const from = "/dashboard";

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const [passwordVisible, setPasswordVisible] = useState(false);
   const [loginError, setLoginError] = useState(null);

   const onSubmit = async (userInfo) => {
      setLoginError(null);
      navigate("/dashboard")
      // try {
      //    const success = await logIn(userInfo.phoneNo, userInfo.password);
      //    if (success) {
      //       navigate(from, { replace: true });
      //    } else {
      //       setLoginError("Invalid Credentials");
      //    }
      // } catch (error) {
      //    console.error("Login error:", error);
      //    setLoginError("An unexpected error occurred. Please try again.");
      // }
   };

   return (
      <div className="min-h-screen flex">
         <div className="hidden lg:flex lg:w-[80px] bg-gradient-to-b from-[#178CCB] to-[#178CCB]" />

         {/* Right Section with Login Form */}
         <div className="flex items-center justify-center w-full lg:w-11/12">
            <div className="w-full max-w-md bg-white rounded-[8px] px-8 pt-8 pb-9 space-y-6">
               <div className="flex flex-col items-center justify-center mb-4">
                  <img src={loginImage} alt="Health Care BD Logo" className="h-20 w-20" />
                  {/* <p>Health Care</p> */}
               </div>

               <h1 className="text-start text-2xl pb-3 font-bold text-gray-700">Login Your Account</h1>

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="w-full">
                     <FloatingLabelInput
                        id="phoneNo"
                        placeholder="Phone Number"
                        label="Enter Your Phone Number"
                        type="tel"
                        defaultValue={"+8801540042699"}
                        className={`primary-input ${errors.phoneNo ? "ring-red-500 focus:ring-red-500 border-red-500" : "ring-[#178ccbd0] focus:ring-[#178ccbd0] border-[#178ccbd0]"}`}
                        labelClassName={`transition-all duration-300 ${errors.phoneNo ? "text-red-500" : "text-gray-500 peer-focus:text-[#178ccbd0]"}`}
                        {...register("phoneNo", {
                           required: "Phone number is required",
                           pattern: {
                              value: /^(\+8801|01)[3-9]\d{8}$/,
                              message: "Invalid Bangladeshi phone number format",
                           },
                        })}
                     />
                     {errors.phoneNo && <p className="text-red-500 text-xs mt-1">{errors.phoneNo.message}</p>}
                  </div>

                  <div className=" mt-5">
                     <div className="w-full relative">
                        <FloatingLabelInput
                           id="password"
                           label="Password"
                           type={passwordVisible ? "text" : "password"}
                           placeholder="******"
                           defaultValue={"password"}
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
                     className={`w-full py-2  rounded-md text-white font-medium disabled:opacity-60 bg-[#178CCB] hover:bg-[#178CCB] transition duration-300 ${loginLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                     disabled={loginLoading}
                  >
                     {loginLoading ? "Loading..." : "Log In"}
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
