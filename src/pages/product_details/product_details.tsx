import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck, Truck } from "lucide-react";

interface ProductDetailsProps {
  product: {
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    image_url: string;
    category: string;
    description: string;
    quantity: number;
    inStock: boolean;
    isFeatured?: boolean;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          {product.isFeatured && (
            <Badge className="absolute top-4 left-4 z-10 bg-emerald-600 text-white">
              Featured
            </Badge>
          )}
          <img
            src={product.image_url}
            alt={`${product.brand} ${product.model}`}
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              {product.brand} {product.model}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 text-sm font-medium">4.8</span>
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
          </div>

          {/* Pricing and Stock */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-emerald-600">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through">
                ${(product.price * 1.1).toLocaleString()}
              </span>
              <Badge
                variant="outline"
                className="text-emerald-600 border-emerald-600"
              >
                Limited Offer
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  product.inStock ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
              <span className="text-sm">
                {product.inStock
                  ? `${product.quantity} units available`
                  : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Model Year:</span>
              <span>{product.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Condition:</span>
              <span>Certified Pre-Owned</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              disabled={!product.inStock}
            >
              {product.inStock ? "Buy Now" : "Notify When Available"}
            </Button>
          </div>

          {/* Assurance Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-emerald-600 mb-2">
                <ShieldCheck className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm">5-Year Warranty</span>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-emerald-600 mb-2">
                <Truck className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm">Free Nationwide Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
