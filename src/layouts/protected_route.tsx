import {
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/auth/auth_slice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (user!.role !== role) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
