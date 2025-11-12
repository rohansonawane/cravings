"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { craftPillars, featuredCollections } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CollectionsPage() {
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
            Collections
          </Badge>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            Homemade tasting journeys
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:mx-0">
            Experience homemade chocolates composed around terroir, botanicals, and
            seasonal rituals. Each collection blends nostalgic comfort, layered
            fillings, and a luminous finale.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 backdrop-blur-sm transition hover:border-primary/30 hover:bg-secondary/60">
                <CardHeader className="space-y-4 p-8">
              <Badge className="w-fit rounded-full bg-primary/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-primary">
                Slow-batch series
                  </Badge>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    {collection.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {collection.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 border-t border-primary/10 bg-secondary/40 p-8">
                  <p className="text-sm text-primary">{collection.highlight}</p>
                  <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {collection.cta}
                  </Button>
                </CardContent>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="pointer-events-none absolute -right-16 top-20 h-32 w-32 rounded-full border border-primary/15 bg-primary/10 blur-3xl"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 rounded-[3rem] border border-primary/20 bg-gradient-to-br from-[#110805] via-[#0d0704] to-[#080402] p-10">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="space-y-4">
              <Badge className="rounded-full bg-primary/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
                Micro-batch atelier
              </Badge>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                What defines a Cravings collection?
              </h2>
              <p className="max-w-2xl text-base text-muted-foreground">
                Every release entwines hand-roasted cacao, heirloom family
                techniques, and layered textures to compose a comforting crescendo of flavour.
              </p>
            </div>
            <Button className="group w-full max-w-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Join the tasting list
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {craftPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -90px 0px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
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
      </div>
    </div>
  );
}

