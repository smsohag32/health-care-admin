import { apiSlice } from "../slice/apiSlice";

const deptApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getDsr: builder.query({
         query: () => ({
            url: `/dept`,
         }),
         providesTags: ["dept"],
      }),
   }),
});

export const { useGetDsrQuery } = deptApi;
