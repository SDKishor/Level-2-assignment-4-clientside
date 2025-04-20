import { Car, ClipboardCheck, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain, SidebarItem } from "./sidebar_items";

const userSibaritems: SidebarItem[] = [
  {
    title: "Orders",
    url: "#",
    icon: ClipboardCheck,
    items: [
      {
        title: "All Orders",
        url: "/user/dashboard/all_orders",
      },
    ],
  },
  // {
  //   title: "Profile",
  //   url: "#",
  //   icon: User,
  //   items: [
  //     {
  //       title: "Update Profile",
  //       url: "#",
  //     },
  //     {
  //       title: "Change Password",
  //       url: "#",
  //     },
  //   ],
  // },
];

const adminSibaritems: SidebarItem[] = [
  {
    title: "Cars",
    url: "#",
    icon: Car,
    isActive: true,
    items: [
      {
        title: "Add Cars",
        url: "/admin/dashboard/add_car",
      },
      {
        title: "View All Cars",
        url: "/admin/dashboard/all_cars",
      },
    ],
  },
  {
    title: "Orders",
    url: "#",
    icon: ClipboardCheck,
    items: [
      {
        title: "All Orders",
        url: "/admin/dashboard/all_orders",
      },
    ],
  },
  {
    title: "Users",
    url: "#",
    icon: User,
    items: [
      {
        title: "All Users",
        url: "/admin/dashboard/all_users",
      },
    ],
  },
];

export function AppSidebar({ isadmin }: { isadmin: boolean }) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={isadmin ? adminSibaritems : userSibaritems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
