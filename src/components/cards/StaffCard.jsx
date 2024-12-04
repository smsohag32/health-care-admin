const StaffCard = ({ staff = [] }) => {
   const { name, phone, role, image } = staff;

   return (
      <div className="py-4 border-b flex items-center justify-between gap-2 border-b-[#E8F4FA]">
         <div className="flex items-center gap-4">
            <img src={image} alt={name} className="w-14 h-14 object-cover rounded-full" />
            <div>
               <p className="text-title text-[20px] font-normal whitespace-nowrap line-clamp-1">{name}</p>
               <p className="text-des text-base font-normal mt-1">{phone}</p>
            </div>
         </div>
         <p className="bg-bluelight text-skyblue flex max-w-[120px]  break-words overflow-clip  !line-clamp-1 rounded-full text-sm font-normal items-center justify-center px-3 py-1">
            {role}
         </p>
      </div>
   );
};

export default StaffCard;
