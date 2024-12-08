import { apiSlice } from "../slice/apiSlice";

const deptApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getDept: builder.query({
         query: () => ({
            url: `/department/all`,
         }),
         transformResponse: (res) => {
            return res.slice().reverse();
         },
         providesTags: ["dept"],
      }),
      addDept: builder.mutation({
         query: (newDepartment) => ({
            url: `/department/add`,
            method: "POST",
            body: newDepartment,
         }),
         invalidatesTags: ["dept"],
      }),
      editDept: builder.mutation({
         query: (updateDept, id) => ({
            url: `/department/edit/${id}`,
            method: "PUT",
            body: updateDept,
         }),
         invalidatesTags: ["dept"],
      }),
      deleteDept: builder.mutation({
         query: (updateDept, id) => ({
            url: `/department/delete/${id}`,
            method: "DELETE",
            body: updateDept,
         }),
         invalidatesTags: ["dept"],
      }),
   }),
});

export const { useGetDeptQuery, useAddDeptMutation, useEditDeptMutation, useDeleteDeptMutation } =
   deptApi;
