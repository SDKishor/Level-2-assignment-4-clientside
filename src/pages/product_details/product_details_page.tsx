import { ProductDetails } from "./product_details";

export function ProductPage() {
  // const { productId } = useParams();
  // const product = getProductById(productId); // Your data fetching logic
  const product = {
    _id: "67a1446286a2277c15962523",
    brand: "tesla",
    model: "model 3",
    year: 2023,
    price: 50000,
    category: "Sedan",
    image_url: "https://example.com/model3.jpg",
    description: "A sleek and efficient electric car.",
    quantity: 5,
    inStock: true,
  };

  if (!product) return <div>Product not found</div>;

  return <ProductDetails product={product} />;
}
