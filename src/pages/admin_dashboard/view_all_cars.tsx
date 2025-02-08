import { TQueryParam, useGetAllCarsQuery } from "@/redux/features/car/car_api";
import { ICar } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CarTable } from "./car_table";

export const ViewAllCarsPage = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);

  const { data, isLoading, error } = useGetAllCarsQuery(params);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);

  const handleEdit = (car: ICar) => {
    // Handle edit logic
    toast.info(`Editing ${car.brand} ${car.model}`);
  };

  const handleDelete = (car: ICar) => {
    // Handle delete logic
    toast.warning(`Deleted ${car.brand} ${car.model}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Car Inventory</h1>
      <CarTable data={data?.data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
