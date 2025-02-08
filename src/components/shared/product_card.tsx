import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProductCardProps {
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
}

export function ProductCard(product: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full  max-w-[320px]">
      {/* Image Section */}
      <div className="relative h-32 sm:h-40 md:h-56 overflow-hidden rounded-t-lg md:rounded-t-xl">
        <img
          src={product.image_url}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105  "
        />

        {/* Featured Badge */}
        {product.isFeatured && (
          <span className="absolute top-1 left-1 md:top-2 md:left-2 bg-blue-500 text-white px-2 py-[2px] md:px-3 md:py-1 text-[10px] md:text-xs rounded-full font-bold uppercase tracking-wide">
            Featured
          </span>
        )}

        {/* Year Badge */}
        <span className="absolute top-1 right-1 md:top-2 md:right-2 bg-white/90 px-2 py-[2px] md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
          {product.year}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-2 md:p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
          <div className="mb-1 md:mb-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-1">
              {product.brand} {product.model}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {product.category}
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-lg md:text-2xl font-bold text-emerald-600">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Stock Status */}
        <div className="flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center space-x-1">
            {product.inStock ? (
              <>
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-600">In Stock</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-600">Out of Stock</span>
              </>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center text-amber-500">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
            <span className="ml-[2px] md:ml-1 text-xs md:text-sm font-medium">
              4.8
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-2 md:mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-1 md:py-2 px-2 md:px-4 rounded-md md:rounded-lg transition-colors duration-200 disabled:bg-gray-300 text-xs md:text-base"
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <Link to={`/products/${product._id}`}>"View Details" </Link>
          ) : (
            "Notify Me"
          )}
        </button>
      </div>
    </div>
  );
}
