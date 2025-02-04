import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
    children: [
      {
        path: "admin",
        element: <div>Admin</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
]);

export default router;
