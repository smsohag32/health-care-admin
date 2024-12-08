import { apiSlice } from "../slice/apiSlice";

const userManagementApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getEmployees: builder.query({
         query: () => ({
            url: `/employees/all`,
         }),
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

      getUserType: builder.query({
         query: () => ({
            url: `/usertype/all`,
         }),
         providesTags: ["usertype"],
      }),
   }),
});

export const { useGetEmployeesQuery, useGetEmployeeQuery, useAddEmployeeMutation } =
   userManagementApi;
