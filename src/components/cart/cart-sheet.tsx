"use client";

import Image from "next/image";
import { ArrowRight, Minus, Plus, ShoppingBag } from "lucide-react";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function CartSheet() {
  const { cartItems, cartCount, cartTotal, updateQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full border border-border bg-secondary/60 text-primary hover:bg-secondary/80 md:border-0"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md bg-background/90 backdrop-blur-xl">
        <SheetHeader className="space-y-1 text-left">
          <SheetTitle className="font-serif text-2xl text-primary">
            Your Cart
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            Pure indulgence awaits. Adjust quantities or proceed to checkout.
          </p>
        </SheetHeader>
        <Separator className="my-6 border-border/60" />
        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/60 bg-secondary/40 p-6 text-center text-sm text-muted-foreground">
              Your cart is empty. Taste our signature creations and add something
              divine.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-start gap-4 rounded-2xl border border-border/40 bg-secondary/40 p-4"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.product.weight}
                      </p>
                    </div>
                    <span className="text-sm text-primary">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-border/40 bg-secondary/60 text-primary hover:bg-secondary/80"
                      onClick={() => updateQuantity(item.product.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[2rem] text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-border/40 bg-secondary/60 text-primary hover:bg-secondary/80"
                      onClick={() => updateQuantity(item.product.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Separator className="my-6 border-border/60" />
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span className="font-semibold text-foreground">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          <Button className="w-full bg-primary text-primary-foreground transition hover:bg-primary/90">
            Proceed to Checkout
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Cold-chain shipping included on orders above $120.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

