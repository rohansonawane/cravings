"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles, Star } from "lucide-react";

import { useCart } from "@/context/cart-context";
import {
  chocolateGallery,
  atelierHighlights,
  craftPillars,
  featuredCollections,
  giftingPerks,
  products,
  tastingLocations,
  signatureVideo,
} from "@/data/site-content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const shimmerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LandingPage() {
  const { addToCart } = useCart();

  return (
    <div className="relative overflow-hidden bg-background pb-24 pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#3f301c1f_0%,transparent_45%),radial-gradient(circle_at_center,#c9a7600a_0%,transparent_60%),linear-gradient(180deg,#0b0604_0%,#090504_45%,#0b0604_100%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-4 md:px-8 lg:gap-28">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={shimmerVariants}
          className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-8">
            <Badge className="w-fit rounded-full bg-secondary/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
              Homemade premium chocolate atelier
            </Badge>
            <div className="space-y-6">
              <motion.h1
                className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.7rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Handcrafting premium homemade chocolates that glow with care.
              </motion.h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From our family kitchens to your celebrations, Cravings slow-tempers
                small batches using heritage cacao, organic cream, and botanical
                infusions. Taste the warmth of homemade craft in every golden bite.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-6 text-primary-foreground transition hover:shadow-[0_0_25px_rgba(216,170,79,0.35)]"
              >
                <Link href="/shop">
                  Shop homemade bars
                  <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-secondary/50 px-8 py-6 text-sm text-primary transition hover:border-primary hover:bg-secondary/80"
              >
                <Link href="/gifting">
                  Book private tasting
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 rounded-3xl border border-border/70 bg-secondary/40 px-6 py-6 sm:grid-cols-3">
              {[
                { label: "Cacao origins", value: "8 single estates" },
                { label: "Hand-finished", value: "Every 90 minutes" },
                { label: "Members", value: "3400 globally" },
              ].map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="floating relative h-full min-h-[380px] overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-[#1b0f0b] via-[#120804] to-[#080302] p-1">
              <div className="absolute -inset-4 bg-[radial-gradient(circle_at_30%_20%,rgba(239,198,109,0.18),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(212,170,79,0.12),transparent_60%)] blur-3xl" />
              <div className="relative h-full rounded-[1.9rem] bg-background/80 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.45)]">
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                  >
                    <source src={signatureVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090504] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-4 rounded-2xl border border-primary/20 bg-background/70 p-5 backdrop-blur-lg">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/25 text-primary">
                        <Star className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                          Atelier exclusive
                        </p>
                        <p className="text-sm text-muted-foreground">
                          First access to the Gilded Midnight collection drops
                          23 Nov.
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full rounded-full border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary hover:bg-secondary/70"
                    >
                      Join the circle
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Badge className="mx-auto w-fit rounded-full bg-secondary/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary md:mx-0">
              Premium homemade visuals
            </Badge>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              A glimpse into our kitchen atelier
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:mx-0">
              Artisanal bars, molten ganaches, and cocoa rituals captured while we temper,
              drizzle, and gild each homemade creation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chocolateGallery.map((item, index) => (
              <motion.div
                key={item.src}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/40"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0604]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-primary-foreground opacity-0 transition group-hover:opacity-100">
                  {item.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section id="collections" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Gilded collections & experiences
              </h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                Discover micro-batches, tasting flights, and gifting rituals that
                spotlight the soul of homemade premium chocolate.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="group flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/50 px-6 py-3 text-sm text-primary transition hover:border-primary hover:bg-secondary/80"
            >
              <Link href="/collections">
                View all experiences
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition hover:border-primary/40 hover:shadow-[0_35px_80px_rgba(212,170,79,0.25)]">
                  <CardHeader className="space-y-4 p-8">
                    <Badge className="w-fit rounded-full bg-primary/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-primary">
                      Cravings atelier
                    </Badge>
                    <CardTitle className="font-serif text-2xl text-foreground">
                      {collection.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {collection.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="border-t border-primary/10 bg-secondary/40 p-8">
                    <p className="text-sm text-primary">{collection.highlight}</p>
                    <Button className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      {collection.cta}
                    </Button>
                  </CardContent>
                  <span className="pointer-events-none absolute -right-16 top-20 h-32 w-32 rounded-full border border-primary/15 bg-primary/10 blur-3xl transition-all duration-500 group-hover:border-primary/25 group-hover:bg-primary/20 group-hover:blur-2xl" />
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="shop" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Signature creations
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Crafted in our kitchen atelier—balancing terroir, nostalgic comfort,
                and gilded finishes in every bite.
              </p>
            </div>
            <Badge className="rounded-full bg-secondary/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
              Same-day dispatch in select cities
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
              >
                <Card className="group relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/50 transition hover:border-primary/30 hover:bg-secondary/70">
                  <div className="grid gap-0 sm:grid-cols-[1fr,1.2fr]">
                    <div className="relative min-h-[260px] overflow-hidden sm:min-h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0604]/20 via-transparent to-[#0b0604]/60" />
                      {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
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
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            {product.weight}
                          </p>
                          <p className="text-lg font-semibold text-primary">
                            ${product.price}
                          </p>
                        </div>
                        <Button
                          onClick={() => addToCart(product)}
                          className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:bg-primary/90 hover:shadow-[0_10px_30px_rgba(216,170,79,0.35)]"
                        >
                          Add to cart
                          <Sparkles className="h-4 w-4 transition group-hover:scale-110" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="craft"
          className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-gradient-to-br from-[#110805] via-[#0d0704] to-[#080402] px-6 py-12 sm:px-10 sm:py-16"
        >
          <span className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <span className="pointer-events-none absolute bottom-10 left-10 h-48 w-48 rounded-full border border-primary/15" />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <Badge className="rounded-full bg-primary/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
              Crafted with intention
            </Badge>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              From bean to gilded finale
            </h2>
            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
              Each batch is orchestrated over 72 hours—from cacao selection to
              hand-painted gold leaf—ensuring a luminous finish that tastes as
              decadent as it looks.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {craftPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-3xl border border-border/40 bg-secondary/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:border-primary/20 hover:bg-secondary/60"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section
          id="gifting"
          className="grid gap-10 rounded-[3rem] border border-primary/20 bg-secondary/30 p-8 lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-6">
            <Badge className="rounded-full bg-primary/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
              Subscriptions & gifting
            </Badge>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Elevate gifting into a golden ritual
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our concierge curates seasonal pairings, handwritten notes, and chilled
              delivery windows. Share the comfort of homemade confections—perfect for
              milestones, gratitude, or everyday spoiling.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {giftingPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <Star className="mt-1 h-4 w-4 text-primary" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Begin with your details
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    placeholder="Aurélie Laurent"
                    className="border-primary/20 bg-background/70"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="concierge@domain.com"
                    className="border-primary/20 bg-background/70"
                  />
                </div>
              </div>
              <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Request concierge call
              </Button>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-[#1a100b] via-[#120805] to-[#090504]">
            <Image
              src="https://images.unsplash.com/photo-1458240257938-ec544ff8fd5b?auto=format&fit=crop&w=1200&q=80"
              alt="Cravings gifting experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090504] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-4 rounded-3xl border border-primary/25 bg-background/70 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Concierge highlight
                  </p>
                  <p className="text-sm text-foreground">
                    Handwritten notes, wax seals, and chilled delivery windows
                    included.
                  </p>
                </div>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <Button
                asChild
                variant="ghost"
                className="w-full rounded-full border border-primary/30 bg-secondary/60 text-primary hover:border-primary hover:bg-secondary/80"
              >
                <Link href="/gifting">Preview gift studio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="visit"
          className="rounded-[3rem] border border-primary/15 bg-gradient-to-br from-[#120805]/90 via-[#0d0604] to-[#080403] p-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <Badge className="rounded-full bg-primary/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
                Boutique tasting salons
              </Badge>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Visit our secret ateliers
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Experience the Cravings ritual in Paris and New York—appointments
                unveil five-course chocolate degustations, cacao-inspired
                cocktails, and live gilding demonstrations.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {tastingLocations.map((location) => (
                  <Card
                    key={location.city}
                    className="rounded-2xl border border-border/40 bg-secondary/40 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {location.city}
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      {location.details}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-4 h-9 rounded-full border border-primary/30 px-4 text-xs uppercase tracking-[0.3em] text-primary hover:border-primary hover:bg-secondary/70"
                    >
                      <Link href="/story">Reserve seats</Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[2.5rem] border border-primary/20 bg-secondary/30 p-6">
              {atelierHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -90px 0px" }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="rounded-2xl border border-primary/10 bg-background/70 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
              <Separator className="border-border/40" />
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Stay in the circle
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    placeholder="your@email.com"
                    className="border-primary/20 bg-background/70"
                  />
                  <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Join
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Receive limited-release previews & atelier invitations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;

