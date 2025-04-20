import { useEffect, useState } from "react";
import { toast } from "sonner";

import { TQueryParam } from "@/redux/features/car/car_api";
import { UserTable } from "./user_table";
import { IUser } from "@/redux/features/auth/auth_slice";
import {
  useBlockUnblockUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/admin/admin_api";

export const ViewAllUsers = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);

  const { data, isLoading, error } = useGetAllUsersQuery(params);
  const [blockUnBlockUser] = useBlockUnblockUserMutation();

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleBlockToggle = async (user: IUser) => {
    try {
      await blockUnBlockUser({
        id: user._id,
        body: { isBlocked: !user.isBlocked },
      }).unwrap();

      toast.success(
        `User ${user.name} ${user.isBlocked ? "unblocked" : "blocked"}`
      );
    } catch (error) {
      console.error("Failed to toggle block status:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">All Orders </h1>
      <UserTable data={data?.data} onBlockToggle={handleBlockToggle} />
    </div>
  );
};
