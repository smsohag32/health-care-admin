import { apiSlice } from "../slice/apiSlice";

const userApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query({
         query: ({ id }) => ({
            url: `/users/${id}`,
         }),
         providesTags: ["user"],
      }),
      getUsers: builder.query({
         query: () => ({
            url: `/users/all`,
         }),
         providesTags: ["user"],
      }),
   }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
