import {
  Home,
  Calendar,
  Info,
  Mail,
  Menu,
  CircleUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Home className="h-6 w-6" />
              <span className="">Tow Service Booking</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Home className="h-4 w-4" />
                Home
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Calendar className="h-4 w-4" />
                Booking
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Info className="h-4 w-4" />
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Home className="h-6 w-6" />
                  Home
                </NavLink>
                <NavLink
                  to="/booking"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Calendar className="h-6 w-6" />
                  Booking
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Info className="h-6 w-6" />
                  About Us
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Mail className="h-6 w-6" />
                  Contact Us
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Add nav bar items here! */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SharedLayout;