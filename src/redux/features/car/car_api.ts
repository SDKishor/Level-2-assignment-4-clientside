import { baseApi } from "@/redux/apis/baseapi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carinfo) => ({
        url: "/cars",
        method: "POST",
        body: carinfo,
      }),
    }),
  }),
});

export const { useCreateCarMutation } = carApi;
