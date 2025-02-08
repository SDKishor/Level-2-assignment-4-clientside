import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICar } from "@/types";
import { Pencil, Trash2 } from "lucide-react";

interface CarTableProps {
  data: ICar[];
  onEdit: (car: ICar) => void;
  onDelete: (car: ICar) => void;
}

export function CarTable({ data, onEdit, onDelete }: CarTableProps) {
  return (
    <Table>
      <TableCaption>A list of available cars in inventory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Brand</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Featured</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((car, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{car.brand}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.year}</TableCell>
            <TableCell>${car.price.toLocaleString()}</TableCell>
            <TableCell>{car.category}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  car.inStock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {car.inStock ? `${car.quantity} in stock` : "Out of stock"}
              </span>
            </TableCell>
            <TableCell>
              {car.isFeatured ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Featured
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Regular
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => onEdit(car)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onDelete(car)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
