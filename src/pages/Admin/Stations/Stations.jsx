
import { useParams } from "react-router-dom";
import location from "@/assets/icons/location.png"
import { formatStationName, generateStationStatData } from "@/lib/utils";
import StationOnboarding from "./StationOnboarding";
import JourneyAnalysis from "./JourneyAnalysis";
import StationStat from "./StationStat";




const Stations = () => {
   const { stationName } = useParams()
   const formattedStationName = formatStationName(stationName);
   const stationStatData = generateStationStatData(formattedStationName);


   return (
      <div>
         <div>
            <h1 className="text-[24px] flex items-center gap-3 font-normal text-[#000000CC]"><img src={location} className="w-14" alt="location" />{formattedStationName}</h1>
         </div>
         <div className="lg:grid-cols-3 mt-6 gap-6 grid">
            <div className="lg:col-span-2">
               <StationStat stationStatData={stationStatData} />
               <div>
                  <JourneyAnalysis />
               </div>
            </div>
            <div className="w-full lg:col-span-1">
               <StationOnboarding />
            </div>
         </div>

      </div>

   );
};

export default Stations;
