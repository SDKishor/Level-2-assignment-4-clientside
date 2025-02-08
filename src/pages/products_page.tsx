import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductCard } from "@/components/shared/product_card";
import { ICar } from "@/types";
import { TQueryParam, useGetAllCarsQuery } from "@/redux/features/car/car_api";
import { toast } from "sonner";

export function ProductsPage() {
  const [params] = useState<TQueryParam[] | undefined>(undefined);

  const { data, error } = useGetAllCarsQuery(params);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching products");
    }
  }, [error]);

  const products: ICar[] = data?.data || [];

  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Get unique brands and categories for filters
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));

  console.log(brands, categories, minPrice, maxPrice);
  // Filtered products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "all" || product.brand === selectedBrand;
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !showInStockOnly || product.inStock;

    return (
      matchesSearch &&
      matchesBrand &&
      matchesCategory &&
      matchesPrice &&
      matchesStock
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters Section */}
      <div className="mb-8 space-y-6">
        {/* Search Input */}
        <Input
          placeholder="Search by brand, model, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-2xl"
        />

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Brand Filter */}
          <Select onValueChange={setSelectedBrand} value={selectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands
                .filter((brand) => brand.trim() !== "")
                .map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          {/* Category Filter */}
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories
                .filter((category) => category.trim() !== "")
                .map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={1000}
              value={priceRange}
              onValueChange={(value) =>
                setPriceRange(value as [number, number])
              }
            />
          </div>

          {/* In Stock Filter */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={showInStockOnly}
              onCheckedChange={(checked) =>
                setShowInStockOnly(Boolean(checked))
              }
            />
            <label htmlFor="inStock" className="text-sm font-medium">
              Show In Stock Only
            </label>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold">No matching vehicles found</h3>
          <p className="text-gray-600 mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
