import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { AddCarForm } from "./add_car_form";
import { ICar } from "@/types";

interface EditCarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  car: ICar | null;
  onUpdateSuccess: () => void;
}

export function EditCarDialog({
  open,
  onOpenChange,
  car,
  onUpdateSuccess,
}: EditCarDialogProps) {
  console.log(car);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit {car?.brand} {car?.model}
          </DialogTitle>
        </DialogHeader>

        {car && (
          <AddCarForm
            onSubmit={async (values) => {
              console.log(values);
              try {
                // Call your update API here
                // await updateCar({ id: car._id, ...values });
                onUpdateSuccess();
                onOpenChange(false);
              } catch (error) {
                console.error("Update failed:", error);
              }
            }}
            defaultValues={{
              brand: car.brand,
              model: car.model,
              year: car.year,
              price: car.price,
              category: car.category,
              description: car.description,
              quantity: car.quantity,
              inStock: car.inStock,
              image_url: car.image_url,
              isFeatured: car.isFeatured ?? false,
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
