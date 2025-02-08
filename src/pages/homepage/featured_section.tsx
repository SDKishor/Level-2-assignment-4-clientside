import { ProductCard } from "@/components/shared/product_card";
import { Link } from "react-router-dom";

export function FeaturedProducts() {
  const featuredProducts = [
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
    {
      _id: "67a1446286a2277c1596272b",
      brand: "Ford",
      model: "Mustang",
      year: 2022,
      price: 45000,
      image_url:
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Coupe",
      description: "A powerful and iconic sports car.",
      quantity: 5,
      inStock: true,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Vehicles
          </h2>
          <Link
            to="/products"
            className="bg-white text-emerald-600 hover:bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 transition-colors duration-200 hidden sm:block"
          >
            View All
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/products"
            className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
}
