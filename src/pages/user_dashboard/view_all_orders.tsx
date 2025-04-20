import { useEffect } from "react";
import { toast } from "sonner";
import { OrderTable } from "../admin_dashboard/order_table";
import { useSelector } from "react-redux";
import { useCurrentUser } from "@/redux/features/auth/auth_slice";
import { useGetOrderByEmailQuery } from "@/redux/features/user/user_api";

export const ViewAllUserOrders = () => {
  const user = useSelector(useCurrentUser);
  const { data, isLoading, error } = useGetOrderByEmailQuery(user?.email);

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
