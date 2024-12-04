import user1 from "@/assets/dashboard/user/user1.png";
import user2 from "@/assets/dashboard/user/user2.png";
import user3 from "@/assets/dashboard/user/user3.png";
import user4 from "@/assets/dashboard/user/user4.png";
import StaffCard from "@/components/cards/StaffCard";

const NurseTab = () => {
   const nurseData = [
      {
         id: 1,
         name: "Jessica Miller",
         phone: "+8801922026933",
         role: "ICU Nurse",
         image: user1,
      },
      {
         id: 2,
         name: "Amanda Lee",
         phone: "+8801722334456",
         role: "Pediatric Nurse",
         image: user2,
      },
      {
         id: 3,
         name: "Christopher",
         phone: "+8801833445567",
         role: "Surgical Nurse",
         image: user3,
      },
      {
         id: 4,
         name: "Sarah Wilson",
         phone: "+8801655778898",
         role: "Emergency Room Nurse",
         image: user4,
      },
   ];

   return (
      <div className="mt-4">
         {nurseData &&
            nurseData.length > 0 &&
            nurseData.map((nurse) => (
               <StaffCard key={nurse.id} staff={nurse} />
            ))}
      </div>
   );
};

export default NurseTab;
