import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function NavMenu() {
  const [isLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link
          to="/"
          className="hidden md:flex items-center gap-2 font-semibold text-lg"
        >
          <span className="text-primary">Logo</span>
        </Link>

        <Link to="/" className="md:hidden mx-auto font-semibold text-lg">
          <span className="text-primary">Logo</span>
        </Link>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    Products
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    About
                  </Link>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {isLoggedIn ? (
                    <Button asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </Button>
                  ) : (
                    <>
                      <Button asChild variant="outline">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button asChild>
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
          </div>

          <div className="ml-6 flex gap-2">
            {isLoggedIn ? (
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="outline">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
