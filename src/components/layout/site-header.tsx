"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { CartSheet } from "@/components/cart/cart-sheet";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Gifting", href: "/gifting" },
  { name: "Story", href: "/story" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="logo-glimmer flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.35em] text-primary sm:text-xl"
        >
          Cravings
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <CartSheet />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 text-sm text-foreground hover:bg-secondary/80 md:hidden"
              >
                <Menu className="h-4 w-4" />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-semibold uppercase tracking-[0.3em] text-primary">
                  Cravings
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 grid gap-3 text-sm font-medium text-foreground">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-xl border border-border/50 bg-secondary/40 px-4 py-3 transition hover:border-primary/50 hover:bg-secondary/70 ${pathname === item.href ? "text-primary" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Separator className="my-6 border-border/60" />
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>Boutique: 18 Rue de Cacao, Paris & NYC.</p>
                <p>Concierge: hello@cravingsatelier.com</p>
                <Button className="w-full bg-primary text-primary-foreground">
                  Reserve a tasting
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

