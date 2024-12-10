import Loading from "@/components/loading/Loading";
import { useGetPermissionsQuery } from "@/redux-store/api/user-management-api";

const PermissionList = () => {
   const { data: permissionData, isLoading, error } = useGetPermissionsQuery();

   if (isLoading) {
      return (
         <Loading />
      );
   }

   if (error) {
      return (
         <div className="flex justify-center items-center h-screen">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
               <p className="font-bold">Error</p>
               <p>An error occurred while fetching permissions. Please try again later.</p>
            </div>
         </div>
      );
   }

   return (
      <div className="">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permissionData && permissionData.map((module) => (
               <div key={module._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-skyblue to-sky-600 bg-opacity-50 px-6 py-4">
                     <h2 className="text-xl font-semibold text-white">{module.module}</h2>
                  </div>
                  <ul className="divide-y divide-gray-200">
                     {module.permissions.map((permission, index) => (
                        <li key={index} className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                           <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                           <span className="text-gray-700">{permission}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PermissionList;

