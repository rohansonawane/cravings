import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Cravings atelier
          </p>
          <p className="mt-2">
            Slow-tempered chocolates & luminous gifting experiences since 2014.
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-4 text-xs uppercase tracking-[0.3em] md:justify-end">
          <Link href="/collections" className="hover:text-primary">
            Collections
          </Link>
          <Link href="/gifting" className="hover:text-primary">
            Gifting
          </Link>
          <Link href="/story" className="hover:text-primary">
            Story
          </Link>
          <a
            href="mailto:hello@cravingsatelier.com"
            className="hover:text-primary"
          >
            Concierge
          </a>
        </div>
      </div>
    </footer>
  );
}

