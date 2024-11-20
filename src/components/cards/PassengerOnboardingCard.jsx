import { Separator } from "../ui/separator";

const PassengerOnboardingCard = ({ item }) => {
   return (
      <div className="w-full">

         <div className="flex items-center justify-between px-1 ga-6 py-3">
            <p className="text-[#808080] font-normal text-base">Uttara North
            </p>
            <p className="text-[#808080] font-normal text-base">545645
            </p>
         </div>
         <Separator />
      </div>
   );
};

export default PassengerOnboardingCard;
