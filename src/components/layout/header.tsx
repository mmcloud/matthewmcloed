"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Cloud, Menu } from "lucide-react";
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
        "transition-colors hover:text-white px-3 py-1 rounded-md",
        isActive ? "text-white font-semibold bg-white/10" : "text-white/80"
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
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-white drop-shadow-md">
          <Cloud className="w-6 h-6 text-primary"/>
          Matthew McLeod
        </Link>
        <ul className="hidden md:flex gap-4 font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-4">
           <Link href="/contact" passHref>
              <Button className="hidden md:flex">
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
            <SheetContent side="right" className="bg-background/90 backdrop-blur-xl border-l-white/10 text-white">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link
                    href="/contact"
                    className="bg-primary text-primary-foreground rounded-lg text-center py-2"
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
