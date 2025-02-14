import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
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
import { NavMenu } from "@/components/shared/nevbar";
import { useLoginMutation } from "@/redux/features/auth/auth_api";
import { verifyToken } from "@/utils/verify_token";
import { IUser, setuser } from "@/redux/features/auth/auth_slice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "admin@mail.com",
      password: "admin123",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastID = toast.loading("Logging in...");

    try {
      const response = await login(values).unwrap();
      const user = verifyToken(response.data.token) as IUser;

      dispatch(setuser({ user, token: response.data.token }));
      toast.success("Login successful.", { id: toastID });
      navigate("/", { replace: true });
    } catch (error) {
      const errorData = error as { data: { message: string } };
      toast.error(errorData.data.message, { id: toastID });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <NavMenu />
      <div className="w-full max-w-sm m-3">
        <h1 className="text-2xl font-bold text-center">
          Login to Your Account
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 max-w-md w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Register
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
