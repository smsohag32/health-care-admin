import { apiSlice } from "../slice/apiSlice";

const userApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query({
         query: ({ id }) => ({
            url: `/users/${id}`,
         }),
         providesTags: ["user"],
      }),
      recharge: builder.mutation({
         query: (rechargeData) => ({
            url: "/recharges",
            method: "POST",
            body: rechargeData,
         }),
         invalidatesTags: ["user"],
      }),
   }),
});

export const { useGetUserQuery, useRechargeMutation } = userApi;
