import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { IUser } from "@/redux/features/auth/auth_slice";
import { Ban, CheckCircle2 } from "lucide-react";

interface UserTableProps {
  data: IUser[];
  onBlockToggle: (user: IUser) => Promise<void>; // Make this async
}

export function UserTable({ data, onBlockToggle }: UserTableProps) {
  const [localUsers, setLocalUsers] = useState<IUser[]>(data);

  const handleBlockToggle = async (user: IUser) => {
    try {
      await onBlockToggle(user);
      // Optimistically update the UI
      const updatedUsers = localUsers.map((u) =>
        u.email === user.email ? { ...u, isBlocked: !u.isBlocked } : u
      );
      setLocalUsers(updatedUsers);

      // Call the parent function
    } catch (error) {
      // Revert if there's an error
      setLocalUsers(data);
      console.error("Block toggle error:", error);
    }
  };

  return (
    <Table>
      <TableCaption>A list of registered users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {localUsers.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.isBlocked
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {user.isBlocked ? "Blocked" : "Active"}
              </span>
            </TableCell>
            <TableCell>
              <Button
                variant={user.isBlocked ? "default" : "destructive"}
                size="sm"
                onClick={() => handleBlockToggle(user)}
              >
                {user.isBlocked ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Unblock
                  </>
                ) : (
                  <>
                    <Ban className="h-4 w-4 mr-2" />
                    Block
                  </>
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
