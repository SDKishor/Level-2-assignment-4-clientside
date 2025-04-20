import { useGetCarByIdQuery } from "@/redux/features/car/car_api";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { ProductOrderSection } from "./product_order_section";

export const ChackoutPage = () => {
  const { productId } = useParams();
  const { data, error } = useGetCarByIdQuery(productId);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  });
  const product = data?.data;

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductOrderSection product={data?.data} />
    </div>
  );
};
