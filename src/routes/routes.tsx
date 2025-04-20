import { DashboardLayout } from "@/layouts/dashboard_layout";
import MainLayout from "@/layouts/main_layout";
import { ProtectedRoute } from "@/layouts/protected_route";
import { AboutPage } from "@/pages/about_page";
import { AddCar } from "@/pages/admin_dashboard/add_car_page";
import { ViewAllCarsPage } from "@/pages/admin_dashboard/view_all_cars";
import { ViewAllOrders } from "@/pages/admin_dashboard/view_all_orders";
import { ViewAllUsers } from "@/pages/admin_dashboard/view_all_user";
import { ChackoutPage } from "@/pages/chackout_page/chackout_page";
import { PurchaseSuccess } from "@/pages/congratulation_page";
import HomePage from "@/pages/homepage/home_page";
import { LoginPage } from "@/pages/login_page";
import { ProductPage } from "@/pages/product_details/product_details_page";
import { ProductsPage } from "@/pages/products_page";
import { RegisterForm } from "@/pages/register_page";
import { ViewAllUserOrders } from "@/pages/user_dashboard/view_all_orders";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "/checkout/:productId",
        element: (
          <ProtectedRoute role="user">
            <ChackoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "congratulation",
        element: (
          <ProtectedRoute role="user">
            <PurchaseSuccess />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "user/dashboard",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout isadmin={false} />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        path: "",
        element: (
          <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 🚗</h1>
        ),
      },
      {
        path: "all_orders",
        element: <ViewAllUserOrders />,
      },
      {
        path: "admin",
        element: <div>block user</div>,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout isadmin={true} />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        path: "",
        element: (
          <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 🚗</h1>
        ),
      },
      {
        path: "add_car",
        element: <AddCar />,
      },
      {
        path: "all_cars",
        element: <ViewAllCarsPage />,
      },
      {
        path: "all_orders",
        element: <ViewAllOrders />,
      },
      {
        path: "all_users",
        element: <ViewAllUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);

export default router;
