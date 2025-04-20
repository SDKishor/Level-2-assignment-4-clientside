import { baseApi } from "@/redux/apis/baseapi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `orders/user/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOrderByEmailQuery } = userApi;
