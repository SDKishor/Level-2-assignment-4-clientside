import { baseApi } from "@/redux/apis/baseapi";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carinfo) => ({
        url: "/cars",
        method: "POST",
        body: carinfo,
      }),
    }),
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
    }),
    getCarById: builder.query({
      query: (args) => {
        console.log(args);

        return {
          url: "/cars/" + args,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateCarMutation, useGetAllCarsQuery, useGetCarByIdQuery } =
  carApi;
