"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-white",
        isActive ? "text-white font-semibold" : "text-white/80"
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white drop-shadow-md">
          Matthew McLeod
        </Link>
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-4">
           <Link href="/contact" passHref>
              <Button className="glass-button rounded-lg hidden md:flex">
                Get Started
              </Button>
            </Link>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent text-white border-white/50 hover:bg-white/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/90 backdrop-blur-xl border-l-white/10 text-white">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-sky-300 transition-colors"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link
                    href="/contact"
                    className="glass-button rounded-lg text-center"
                    onClick={() => setSheetOpen(false)}
                  >
                    Get Started
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
