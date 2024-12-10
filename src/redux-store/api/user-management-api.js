import { apiSlice } from "../slice/apiSlice";

const userManagementApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getEmployees: builder.query({
         query: () => ({
            url: `/employees/all`,
         }),
         transformResponse: (res) => {
            return res.slice().reverse();
         },
         providesTags: ["employee"],
      }),
      getEmployee: builder.query({
         query: (id) => ({
            url: `/employee/${id}`,
         }),
         providesTags: ["employee"],
      }),
      addEmployee: builder.mutation({
         query: (newEm) => ({
            url: `/employee/add`,
            method: "POST",
            body: newEm,
         }),
         invalidatesTags: ["employee"],
      }),
      addType: builder.mutation({
         query: (newType) => ({
            url: `/usertype/add`,
            method: "POST",
            body: newType,
         }),
         invalidatesTags: ["usertype"],
      }),
      getUserType: builder.query({
         query: () => ({
            url: `/usertype/all`,
         }),
         providesTags: ["usertype"],
      }),
      getPermissions: builder.query({
         query: () => ({
            url: `/permissions/all`,
         }),
      }),
   }),
});

export const {
   useGetEmployeesQuery,
   useGetEmployeeQuery,
   useAddEmployeeMutation,
   useGetUserTypeQuery,
   useGetPermissionsQuery,
   useAddTypeMutation,
} = userManagementApi;
