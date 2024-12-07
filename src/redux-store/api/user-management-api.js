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
   }),
});

export const { useGetEmployeesQuery, useGetEmployeeQuery } = userManagementApi;
