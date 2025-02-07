import { Footer } from "@/components/shared/footer";
import { NavMenu } from "@/components/shared/nevbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full mt-16">
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
}
