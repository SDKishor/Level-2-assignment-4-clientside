import { Footer } from "@/components/shared/footer";
import { NavMenu } from "@/components/shared/nevbar";
import { AppSidebar } from "@/components/shared/sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const DashboardLayout = ({ isadmin }: { isadmin: boolean }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <main className="w-full mt-16 relative">
      <NavMenu />
      <SidebarProvider>
        <AppSidebar isadmin={isadmin} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={`/${user!.role}/dashboard`}>
                    {user!.role}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>

      <Footer />
    </main>
  );
};
