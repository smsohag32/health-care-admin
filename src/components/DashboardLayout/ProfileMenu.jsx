import {
   Settings,
   User,

} from "lucide-react"

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "../user-avatar/UserAvatar"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { logoutUser } from "@/redux-store/slice/authSlice"
import { useAuth } from "@/hooks/useAuth"
import { formatName } from "@/utils/helper"

export function ProfileMenu() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { user } = useAuth()
   const handleLogout = () => {
      dispatch(logoutUser())
      navigate("/", { replace: true });
   };

   return (
      <DropdownMenu className="w-full">
         <DropdownMenuTrigger asChild className="w-full cursor-pointer px-2 py-3 border-e !border-e-white light-bg rounded-[4px]">
            <div className="flex items-center justify-between gap-2">
               <div className="flex items-center gap-2">
                  <UserAvatar name={"Sohag"} photo={"data:image/jpeg;base64,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"} />
                  <span className="flex flex-col  line-clamp-1 max-w-[190px]">
                     {formatName(user?.firstName + " " + user?.lastName) || "Sohag Sheik "}
                     <span className="text-xs font-normal text-[#B4B4B4]">System Admin</span>
                  </span>

               </div>
               <span>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0.999999L7 7L13 1" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

               </span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56" >
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem className="gap-2 cursor-pointer">
                  <User />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
               </DropdownMenuItem>
               <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Settings />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>

               <button
                  onClick={handleLogout}
                  className="flex items-center group gap-4 w-full">
                  <span
                     className="secondary-bg transition-all  ease-in-out bg-gradient-to-br from-[#EEF9FF] to-[#EEF9FF]
    group-hover:from-[#178CCB] group-hover:to-[#178CCB] focus:from-[#178CCB] focus:to-[#178CCB] active:from-[#178CCB]
    active:to-[#178CCB] bg-[length:200%_200%] hover:bg-[length:100%_100%] focus:bg-[length:100%_100%]
    active:bg-[length:100%_100%] group-hover:text-white focus:text-white active:text-white flex gap-4 items-center flex-1 w-full justify-start px-[14px] py-3 rounded-[16px]">
                     <span>
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M14 15.0001L19 10.0001M19 10.0001L14 5.00006M19 10.0001H7M10 15.0001C10 15.2956 10 15.4434 9.98901 15.5715C9.87482 16.902 8.89486 17.9969 7.58503 18.2573C7.45903 18.2824 7.31202 18.2987 7.01835 18.3314L5.99694 18.4448C4.46248 18.6153 3.69521 18.7006 3.08566 18.5055C2.27293 18.2455 1.60942 17.6516 1.26118 16.8725C1 16.2883 1 15.5163 1 13.9724V6.02776C1 4.48383 1 3.71186 1.26118 3.12758C1.60942 2.34854 2.27293 1.75467 3.08566 1.49459C3.69521 1.29953 4.46246 1.38478 5.99694 1.55528L7.01835 1.66877C7.31212 1.70141 7.45901 1.71773 7.58503 1.74279C8.89486 2.00322 9.87482 3.0981 9.98901 4.42867C10 4.5567 10 4.70449 10 5.00006"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <defs>
                              <linearGradient
                                 id="paint0_linear_809_55"
                                 x1="1"
                                 y1="1.38257"
                                 x2="18.2187"
                                 y2="19.3656"
                                 gradientUnits="userSpaceOnUse">
                                 <stop stopColor="#178CCB" />
                                 <stop
                                    offset="1"
                                    stopColor="#178CCB"
                                 />
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>

                     <span>Logout</span>
                  </span>

                  {/* Secondary span with hover and focus transition */}
                  <span
                     className="flex items-center justify-start px-[14px] py-3.5 transition-all duration-300 ease-in-out bg-gradient-to-br from-[#EEF9FF] to-[#FEF6FF]
    group-hover:from-[#178CCB] group-hover:to-[#178CCB] focus:from-[#178CCB] focus:to-[#178CCB] active:from-[#178CCB]
    active:to-[#178CCB] bg-[length:200%_200%] hover:bg-[length:100%_100%] focus:bg-[length:100%_100%]
    active:bg-[length:100%_100%] group-hover:text-white focus:text-white active:text-white secondary-bg rounded-[16px]">
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M13.0505 7H3.5C2.11929 7 1 5.88071 1 4.5C1 3.11929 2.11929 2 3.5 2H13.0505M6.94949 18H16.5C17.8807 18 19 16.8807 19 15.5C19 14.1193 17.8807 13 16.5 13H6.94949M1 15.5C1 17.433 2.567 19 4.5 19C6.433 19 8 17.433 8 15.5C8 13.567 6.433 12 4.5 12C2.567 12 1 13.567 1 15.5ZM19 4.5C19 6.433 17.433 8 15.5 8C13.567 8 12 6.433 12 4.5C12 2.567 13.567 1 15.5 1C17.433 1 19 2.567 19 4.5Z"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                        <defs>
                           <linearGradient
                              id="paint0_linear_809_29"
                              x1="1"
                              y1="1"
                              x2="19"
                              y2="19"
                              gradientUnits="userSpaceOnUse">
                              <stop stopColor="#178CCB" />
                              <stop
                                 offset="1"
                                 stopColor="#178CCB"
                              />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
               </button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
