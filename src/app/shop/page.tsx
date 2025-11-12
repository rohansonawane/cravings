"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { products } from "@/data/site-content";
import { useCart } from "@/context/cart-context";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <div className="relative overflow-hidden bg-background pb-24 pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#3f301c1f_0%,transparent_45%),radial-gradient(circle_at_center,#c9a7600a_0%,transparent_60%),linear-gradient(180deg,#0b0604_0%,#090504_45%,#0b0604_100%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <Badge className="rounded-full bg-secondary/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            Shop
          </Badge>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            Homemade premium chocolate gallery
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:mx-0">
            Explore handcrafted tablets, bonbons, and pralines finished with a
            golden glow. Each batch is made in small home kitchens for a velvet
            snap and melt-in-your-mouth comfort.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 backdrop-blur-sm transition hover:border-primary/30 hover:bg-secondary/60">
                <CardHeader className="relative space-y-4 p-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090504] via-transparent to-transparent" />
                    {product.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-primary/85 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary-foreground">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 px-6">
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note) => (
                      <Badge
                        key={note}
                        className="rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-primary"
                      >
                        {note}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="uppercase tracking-[0.3em]">
                      {product.weight}
                    </span>
                    <span className="text-lg font-semibold text-primary">
                      ${product.price}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button
                    onClick={() => addToCart(product)}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-primary-foreground transition hover:bg-primary/90 hover:shadow-[0_10px_30px_rgba(216,170,79,0.35)]"
                  >
                    Add to cart
                    <Sparkles className="h-4 w-4 transition group-hover:scale-110" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

