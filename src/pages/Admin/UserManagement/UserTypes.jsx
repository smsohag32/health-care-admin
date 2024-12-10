import Empty from "@/components/empty/Empty";


import { useState } from "react";

import Loading from "@/components/loading/Loading";
import AddUserType from "./AddUserType";
import { Delete, Edit, Plus, Trash2 } from "lucide-react";
import { useGetUserTypeQuery } from "@/redux-store/api/user-management-api";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PermissionList from "./PermissionList";
import { useGetUsersQuery } from "@/redux-store/api/userApi";

const UserTypes = () => {
   const { data: userTypeData = [], isLoading, refetch } = useGetUserTypeQuery();
   const { data: userData } = useGetUsersQuery()
   const [isAdd, setAdd] = useState(false)



   return (
      <div>
         <div className="flex items-center justify-between">
            <Tabs defaultValue="userType" className="w-full">
               <TabsList className="w-full flex bg-transparent border-b border-skyblue py-8 bg-white px-2  mb-6 items-center justify-between">
                  <div >
                     <TabsTrigger className=" text-des py-2 text-[18px] font-normal" value="userType">User Type List</TabsTrigger>
                     <TabsTrigger className=" text-des py-2 text-[18px] font-normal" value="permission">Permission</TabsTrigger>
                  </div>
                  <div className=" flex items-center justify-end">
                     <button onClick={() => setAdd(true)} className="primary-bg w-full  py-[6px] px-6  text-base flex items-center gap-2 justify-center font-normal text-white rounded-[8px]">
                        <Plus size={16} /> Add new
                     </button>
                  </div>
               </TabsList>
               <TabsContent value="userType" c>  <div className="w-full">
                  {
                     isLoading ? <Loading /> : <>
                        {userTypeData.length > 0 ? (
                           <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6 ">
                              {userTypeData?.map(type => <div className="bg-white rounded-[8px] p-6" key={type?._id}>
                                 <div className="flex items-center gap-4 w-full justify-between">
                                    <h1 className="lg:text-[20px] text-[20px] text-title font-normal">{type?.name}</h1>
                                    <div className="flex items-center gap-2">
                                       <Button size="sm" variant="outline"><Edit size={16} /></Button>
                                       <Button size="sm" variant="outline"><Trash2 size={16} /></Button>
                                    </div>
                                 </div>
                                 <p className="mt-6 text-base text-des">{type?.description}</p>
                                 <div>
                                    {/* {team.participants.slice(0, 3).map((pr, index) => {

                                       return (
                                          <AvatarProfile
                                             key={index}
                                             name={pr}
                                             backgroundColor={colors[index % colors.length]}
                                          />
                                       );
                                    })}
                                    {team.members > 3 && (
                                       <span className="text-sm flex items-center gap-1 font-semibold text-gray-500 ps-4">
                                          +{team.members - 3} more
                                       </span>
                                    )} */}
                                 </div>
                              </div>)}
                           </div>
                        ) : (
                           <Empty message={"No dept found."} />
                        )}</>
                  }

               </div>

                  <AddUserType refetch={refetch} isOpen={isAdd} setOpen={setAdd}></AddUserType></TabsContent>
               <TabsContent value="permission"><PermissionList /></TabsContent>
            </Tabs>

         </div>



      </div>
   );
};

export default UserTypes;
