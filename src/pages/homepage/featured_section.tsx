import { ProductCard } from "@/components/shared/product_card";
import { TQueryParam, useGetAllCarsQuery } from "@/redux/features/car/car_api";
import { ICar } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function FeaturedProducts() {
  const [params] = useState<TQueryParam[] | undefined>([
    { name: "isFeatured", value: true },
  ]);

  const { data, error } = useGetAllCarsQuery(params);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);
  const featuredProducts = data?.data || [];

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
          {featuredProducts.slice(0, 6).map((product: ICar) => (
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
