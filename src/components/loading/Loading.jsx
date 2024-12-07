import { Skeleton } from "../ui/skeleton";

const Loading = () => {
   return (
      <div className="py-6 space-y-4">
         <Skeleton className="w-full h-[16px] rounded-full" />
         <Skeleton className="w-full h-[16px] rounded-full" />
         <Skeleton className="w-full h-[16px] rounded-full" />
         <Skeleton className="w-full h-[16px] rounded-full" />
      </div>
   );
};

export default Loading;
