import { DashboardLayout } from "@/layouts/dashboard_layout";
import MainLayout from "@/layouts/main_layout";
import HomePage from "@/pages/homepage/home_page";
import { LoginPage } from "@/pages/login_page";
import { RegisterForm } from "@/pages/register_page";
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
        element: <div>Products</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
    ],
  },
  {
    path: "user/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "admin",
        element: <div>block user</div>,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: <div>Dashboard</div>,
    children: [
      {
        path: "admin",
        element: <div>block user</div>,
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
