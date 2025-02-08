import { toast } from "sonner";
import { AddCarForm, CarFormValues } from "./add_car_form";
import { useCreateCarMutation } from "@/redux/features/car/car_api";

export const AddCar = () => {
  const [createCar] = useCreateCarMutation();

  async function onSubmit(values: CarFormValues) {
    console.log(values);
    const toastID = toast.loading("Logging in...");

    try {
      await createCar(values).unwrap();

      toast.success("Car added successful.", { id: toastID });
    } catch (error) {
      const errorData = error as { data: { message: string } };
      toast.error(errorData.data.message, { id: toastID });
    }
  }
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold capitalize">
        please add car details
      </h2>
      <AddCarForm onSubmit={onSubmit} />
    </>
  );
};
