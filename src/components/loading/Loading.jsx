import { Skeleton } from "../ui/skeleton";

const Loading = () => {
   return (
      <div className="py-8 space-y-4">
         <Skeleton className="w-full h-[26px] rounded-[1rem]" />
         <Skeleton className="w-full h-[36px] rounded-[1rem]" />
         <Skeleton className="w-full h-[36px] rounded-[1rem]" />
         <Skeleton className="w-full h-[36px] rounded-[1rem]" />
      </div>
   );
};

export default Loading;
