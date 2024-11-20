import { useState } from "react";
import VmAlert from "../modals/HcAlert";
import UserAvatar from "../user-avatar/UserAvatar";
import shop from "@/assets/dashboard/agent.png";

const AgentRequestCard = ({ agent }) => {
   const [isApprove, setIsApproved] = useState(false);
   const [isDecline, setIsDeclined] = useState(false);

   const handleApproved = () => {
      // Handle the approved logic here
   };

   const handleDecline = () => {
      // Handle the decline logic here
   };

   const handleCloseApprove = () => {
      setIsApproved(false);
   };

   const handleCloseDecline = () => {
      setIsDeclined(false);
   };

   return (
      <div className="px-4 py-4 rounded-[16px] secondary-bg">
         <div className="w-full flex gap-3 items-center">
            <UserAvatar name={agent?.name} photo={""} />
            <div>
               <p className="text-[18px] font-medium text-[#222222]">{agent?.name}</p>
               <p className="text-xs mt-2 font-normal text-[#6B6B6B]">{agent?.mobile}</p>
            </div>
         </div>

         <div className="mt-4 lg:grid w-full lg:grid-cols-2">
            <div className="w-full">
               <p className="text-xs mt-2 font-normal text-[#6B6B6B]">Address</p>
               <p className="text-base font-medium text-[#222222]">{agent?.address}</p>
            </div>
            <div className="w-full">
               <p className="text-xs mt-2 font-normal text-[#6B6B6B]">DSR</p>
               <p className="text-base font-medium text-[#222222]">{agent?.dsr}</p>
            </div>
         </div>

         <div className="mt-4 bg-white w-full h-[150px] overflow-hidden rounded-[8px]">
            <img src={shop} alt="Agent Shop" className="w-full h-full" />
         </div>

         <div className="mt-4 flex items-center gap-4">
            <button className="outline-btn" onClick={() => setIsDeclined(true)}>Decline</button>
            <button className="primary-btn" onClick={() => setIsApproved(true)}>Approve</button>
         </div>

         {/* Approval Confirmation Alert */}
         <VmAlert
            message={"Are you sure, do you want to approve?"}
            description={"This action cannot be undone. Once approved, the agent will be permanently accepted."}
            isOpen={isApprove}
            handleConfirm={handleApproved}
            handleClose={handleCloseApprove}
         />

         {/* Decline Confirmation Alert */}
         <VmAlert
            message={"Are you sure, do you want to decline?"}
            description={"This action cannot be undone. Declining will remove the agent from the request list."}
            isOpen={isDecline}
            handleConfirm={handleDecline}
            handleClose={handleCloseDecline}
         />
      </div>
   );
};

export default AgentRequestCard;
