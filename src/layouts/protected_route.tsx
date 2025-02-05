import { useCurrentToken } from "@/redux/features/auth/auth_slice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
