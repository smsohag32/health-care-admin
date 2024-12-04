import user1 from "@/assets/dashboard/user/user1.png";
import user2 from "@/assets/dashboard/user/user2.png";
import user3 from "@/assets/dashboard/user/user3.png";
import user4 from "@/assets/dashboard/user/user4.png";
import StaffCard from "@/components/cards/StaffCard";

const StaffTab = () => {
   const staffData = [
      {
         id: 1,
         name: "Alice Johnson",
         phone: "+8801922026933",
         role: "Head Nurse",
         image: user1,
      },
      {
         id: 2,
         name: "John Smith",
         phone: "+8801722334456",
         role: "Lab Technician",
         image: user2,
      },
      {
         id: 3,
         name: "Emily Davis",
         phone: "+8801833445567",
         role: "Pharmacist",
         image: user3,
      },
      {
         id: 4,
         name: "Michael Brown",
         phone: "+8801655778898",
         role: "Receptionist",
         image: user4,
      },
   ];

   return (
      <div className="">
         {staffData &&
            staffData?.length > 0 &&
            staffData.map((staff) => (
               <StaffCard key={staff.id} staff={staff} />
            ))}
      </div>
   );
};

export default StaffTab;
