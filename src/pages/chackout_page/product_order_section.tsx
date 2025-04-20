import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { toast } from "sonner";
import { useCreateOrderMutation } from "@/redux/features/order/order_api";
import { useCurrentUser } from "@/redux/features/auth/auth_slice";
import { useSelector } from "react-redux";

// Define product type
type Product = {
  _id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  image_url: string;
  inStock: boolean;
  quantity: number;
};

// Validation schema
const orderSchema = z.object({
  productId: z.string(),
  amount: z.number().min(1, "Amount must be at least 1"),
  customer_name: z.string().min(2, "Name must be at least 2 characters"),
  customer_address: z.string().min(5, "Address must be at least 5 characters"),
  customer_phone: z.string(),
  customer_city: z.string().min(2, "City must be at least 2 characters"),
  customer_post_code: z.string().length(4, "Post code must be 4 digits"),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export const ProductOrderSection = ({ product }: { product: Product }) => {
  const [createOrder] = useCreateOrderMutation();

  const user = useSelector(useCurrentUser);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      productId: product._id,
      amount: product.price,
      customer_name: "",
      customer_address: "",
      customer_phone: "",
      customer_city: "",
      customer_post_code: "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    const newdata = { ...data, email: user?.email };

    console.log("Order Data:", data);
    try {
      const orderInfo = await createOrder(newdata).unwrap();

      toast.success("Order created successfully!");

      //rediract to external payment gateway
      window.location.href = orderInfo.data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Error creating order:", error);
    }
  };

  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Product Display Section */}
        <Card className="flex-1 p-6">
          <div className="space-y-6">
            <img
              src={product.image_url}
              alt={`${product.brand} ${product.model}`}
              className="h-64 w-full rounded-lg object-cover md:h-96"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                {product.brand} {product.model} ({product.year})
              </h2>
              <p className="text-3xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="font-semibold">Availability:</span>
                  <span
                    className={`ml-2 ${
                      product.inStock ? "text-green-600" : "text-destructive"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Order Form Section */}
        <Card className="flex-1 p-6">
          <h2 className="mb-6 text-2xl font-bold">Place Order</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="customer_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="customer_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipping Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="customer_city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Dhaka" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customer_post_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Code</FormLabel>
                      <FormControl>
                        <Input placeholder="1229" maxLength={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="customer_phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="01XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (USD)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        readOnly
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={!product.inStock || form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Processing..." : "Order Now"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};
