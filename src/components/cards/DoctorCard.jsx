
const DoctorCard = ({ doctor = [] }) => {
   const { name, phone, specialization, image } = doctor;

   return (
      <div className="py-4 border-b flex w-full items-center justify-between gap-3 border-b-[#E8F4FA]">
         <div className="flex items-center gap-4">
            <img src={image} alt="Doctor" className="w-14 h-14 object-cover" />
            <div>
               <p className="text-title text-[20px] font-normal  line-clamp-1">{name}</p>
               <p className="text-des text-base font-normal mt-1">{phone}</p>
            </div>
         </div>
         <p className="bg-bluelight text-skyblue flex rounded-full text-sm font-normal items-center justify-center px-3 py-1">{specialization}</p>
      </div>
   );
};

export default DoctorCard;
