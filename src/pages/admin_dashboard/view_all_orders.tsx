import { useEffect, useState } from "react";
import { OrderTable } from "./order_table";
import { toast } from "sonner";
import { useGetAllOrdersQuery } from "@/redux/features/order/order_api";
import { TQueryParam } from "@/redux/features/car/car_api";

export const ViewAllOrders = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);

  const { data, isLoading, error } = useGetAllOrdersQuery(params);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">All Orders </h1>
      <OrderTable data={data?.data} />
    </div>
  );
};
