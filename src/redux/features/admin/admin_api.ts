import { baseApi } from "@/redux/apis/baseapi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "admin/users",
        method: "GET",
      }),
    }),
    blockUnblockUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `admin//users/${id}/block`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useBlockUnblockUserMutation } = adminApi;
