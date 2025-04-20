import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface IOrderTransaction {
  _id: string;
  transactionStatus: string;
  bank_status: string;
  sp_code: string;
  sp_message: string;
  method: string;
  date_time: Date;
}

// Order interface
export interface IOrder {
  _id: string;
  totalPrice: number;
  email: string;
  productId: string;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
  transaction: IOrderTransaction;
  createdAt: Date;
}

interface OrderTableProps {
  data: IOrder[];
}

export function OrderTable({ data }: OrderTableProps) {
  return (
    <Table>
      <TableCaption>A list of recent orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Product ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((order) => (
          <TableRow key={order._id}>
            <TableCell className="font-medium">
              {order._id.substring(0, 8)}...
            </TableCell>
            <TableCell>{order.email}</TableCell>
            <TableCell>${order.totalPrice.toLocaleString()}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : order.status === "Cancelled"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>
              {new Date(order.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{order.productId.substring(0, 8)}...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
