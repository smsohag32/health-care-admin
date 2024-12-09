import Empty from "@/components/empty/Empty";


import { useState } from "react";

import { useGetDeptQuery } from "@/redux-store/api/deptApi";
import Loading from "@/components/loading/Loading";
import AddUserType from "./AddUserType";
import { Delete, Edit, Plus, Trash2 } from "lucide-react";
import { useGetUserTypeQuery } from "@/redux-store/api/user-management-api";
import { Button } from "@/components/ui/button";

const UserTypes = () => {
   const { data: userTypeData = [], isLoading } = useGetUserTypeQuery();

   const [isAdd, setAdd] = useState(false)



   return (
      <div>
         <div className="flex items-center justify-between">
            <h1 className="font-normal text-[24px]">Roles</h1>
            <div>
               <button onClick={() => setAdd(true)} className="primary-bg w-full  py-[8px] px-6  text-base flex items-center gap-2 justify-center font-normal text-white rounded-[8px]">
                  <Plus size={16} /> Add new
               </button>
            </div>
         </div>
         <div className="w-full">
            {
               isLoading ? <Loading /> : <>
                  {userTypeData.length > 0 ? (
                     <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6 ">
                        {userTypeData?.map(type => <div className="bg-white rounded-[8px] p-6" key={type?._id}>
                           <div className="flex items-center gap-4 w-full justify-between">
                              <h1 className="lg:text-[20px] text-[20px] text-title font-normal">{type?.name}</h1>
                              <div className="flex items-center gap-4">
                                 <Button size="sm" variant="outline"><Edit size={16} /></Button>
                                 <Button size="sm" variant="outline"><Trash2 size={16} /></Button>
                              </div>
                           </div>
                           <p className="mt-6">{type?.description}</p>
                           <div>

                           </div>
                        </div>)}
                     </div>
                  ) : (
                     <Empty message={"No dept found."} />
                  )}</>
            }

         </div>

         <AddUserType isOpen={isAdd} setOpen={setAdd}></AddUserType>
      </div>
   );
};

export default UserTypes;
