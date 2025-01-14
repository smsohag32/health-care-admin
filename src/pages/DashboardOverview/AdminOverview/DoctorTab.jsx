import user1 from "@/assets/dashboard/user/user1.png";
import user2 from "@/assets/dashboard/user/user2.png";
import user3 from "@/assets/dashboard/user/user3.png";
import user4 from "@/assets/dashboard/user/user4.png";
import DoctorCard from "@/components/cards/DoctorCard";

const DoctorTab = () => {

   const doctorData = [
      {
         id: 1,
         name: "Dr. Sohag Sheik",
         phone: "+8801922026932",
         specialization: "Dentist",
         image: user1,
      },
      {
         id: 2,
         name: "Dr. Ashik Rahman",
         phone: "+8801722334455",
         specialization: "Cardiologist",
         image: user2,
      },
      {
         id: 3,
         name: "Dr. Naim Hasan",
         phone: "+8801833445566",
         specialization: "Pediatrician",
         image: user3,
      },
      {
         id: 4,
         name: "Dr. Nupur Akhtar",
         phone: "+8801655778899",
         specialization: "Orthopedic",
         image: user4,
      },
   ];

   return (
      <div className="">
         {doctorData &&
            doctorData?.length > 0 &&
            doctorData.map((doctor) => (
               <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
      </div>
   );
};

export default DoctorTab;
