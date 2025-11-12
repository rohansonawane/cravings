"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

import { giftingPerks, products } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GiftingPage() {
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
            Gifting & concierge
          </Badge>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            Homemade gifting rituals
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:mx-0">
            Personalize keepsake boxes, wax seals, and hand-scripted notes with
            our concierge. From intimate soirées to enterprise gifting, every
            detail is infused with the warmth of homemade premium chocolate.
          </p>
        </motion.div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-3xl border border-border/60 bg-secondary/40 p-8">
            <CardHeader className="space-y-3 p-0">
              <Gift className="h-8 w-8 text-primary" />
              <CardTitle className="font-serif text-2xl text-foreground">
                Concierge briefing
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Share your occasion, palette, and delivery details. Our team will
                design a homemade-inspired proposal within 24 hours including curated pairings and
                presentation concepts.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 grid gap-4 p-0">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
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
                <div className="space-y-2">
                  <Label htmlFor="occasion">Occasion</Label>
                  <Input
                    id="occasion"
                    placeholder="Wedding welcome, holiday, corporate"
                    className="border-primary/20 bg-background/70"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input
                    id="timeline"
                    placeholder="Delivery date or event window"
                    className="border-primary/20 bg-background/70"
                  />
                </div>
              </div>
              <Button className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Request design consultation
              </Button>
              <p className="text-xs text-muted-foreground">
                Expect a personal email within one business day with curation
                ideas and pricing.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border/60 bg-secondary/40 p-8">
            <CardHeader className="space-y-3 p-0">
              <Sparkles className="h-8 w-8 text-primary" />
              <CardTitle className="font-serif text-2xl text-foreground">
                Homemade concierge services
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Every program includes chilled logistics, handwritten touches, and
                swaps tailored to recipients—all anchored in homemade comfort.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 grid gap-3 p-0 text-sm text-muted-foreground">
              {giftingPerks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-start gap-3 rounded-2xl border border-border/40 bg-secondary/40 p-4"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary/80" />
                  <p>{perk}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Suggested pairings
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Blend crowd-favourite homemade recipes with limited releases for an
            elevated tasting arc.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {products.slice(0, 2).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -90px 0px" }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-border/50 bg-secondary/40 p-6"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <Badge
                      key={note}
                      className="rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-primary"
                    >
                      {note}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

