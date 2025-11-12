import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cravings — Homemade Premium Chocolates",
  description:
    "Cravings handcrafts small-batch homemade premium chocolates with luminous cacao artistry, heartfelt gifting, and effortless ecommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
