import { useGetCarByIdQuery } from "@/redux/features/car/car_api";
import { ProductDetails } from "./product_details";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

export function ProductPage() {
  const { productId } = useParams();
  // const [params] = useState<TQueryParam[] | undefined>(undefined);

  const { data, error } = useGetCarByIdQuery(productId);

  console.log(data);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);

  const product = data?.data;

  if (!product) return <div>Product not found</div>;

  return <ProductDetails product={product} />;
}
