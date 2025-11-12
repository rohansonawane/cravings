"use client";

import { motion } from "framer-motion";

import { atelierHighlights, storyMilestones } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function StoryPage() {
  return (
    <div className="relative overflow-hidden bg-background pb-24 pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#3f301c1f_0%,transparent_45%),radial-gradient(circle_at_center,#c9a7600a_0%,transparent_60%),linear-gradient(180deg,#0b0604_0%,#090504_45%,#0b0604_100%)]" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <Badge className="rounded-full bg-secondary/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            Our story
          </Badge>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            A decade of homemade cacao rituals
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Cravings began as a late-night experiment in a Parisian loft kitchen, evolving
            into an atelier devoted to slow-tempered homemade chocolate and golden
            experiences.
          </p>
        </motion.div>

        <div className="mt-14 space-y-10">
          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-border/60 bg-secondary/40 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.35)]"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-primary">
                {milestone.year}
              </span>
              <h2 className="mt-4 font-serif text-2xl text-foreground">
                {milestone.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>

        <section className="mt-16 rounded-[3rem] border border-primary/20 bg-gradient-to-br from-[#110805] via-[#0d0704] to-[#080402] p-10">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            The atelier today
          </h2>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            We continue to honor cacao farmers, experiment with botanical
            infusions, and host candlelit tastings that celebrate homemade comfort and community.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {atelierHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-3xl border border-border/40 bg-secondary/40 p-6"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <Separator className="my-16 border-border/40" />
        <div className="text-center text-sm text-muted-foreground">
          Crafted in Paris & New York with cacao from our cherished partners.
        </div>
      </div>
    </div>
  );
}

