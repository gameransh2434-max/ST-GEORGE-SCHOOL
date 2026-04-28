import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { CLERK_PUBLISHABLE_KEY } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: "St. George School, Banda — CBSE | Awas Vikas",
  description:
    "St. George School, Awas Vikas, Banda — a CBSE-affiliated institution offering Nursery to Class 12 with Science, Commerce and Mathematics streams.",
  openGraph: {
    title: "St. George School, Banda",
    description:
      "Excellence in Education & Character — Nursery to Class 12, CBSE-affiliated.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E2046",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: "hsl(220 80% 20%)",
          colorBackground: "hsl(0 0% 100%)",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          borderRadius: "0px",
        },
        elements: {
          cardBox:
            "bg-white border border-zinc-200 shadow-xl rounded-none w-[440px] max-w-full overflow-hidden",
          headerTitle: "font-serif text-2xl text-school-navy",
          formButtonPrimary:
            "bg-school-navy hover:bg-school-navy/90 text-white rounded-none font-medium normal-case",
          socialButtonsBlockButton:
            "border-zinc-300 bg-white hover:bg-school-navy hover:text-white rounded-none",
          formFieldInput:
            "bg-white border-zinc-300 rounded-none focus:border-school-gold focus:ring-school-gold",
          footerActionLink:
            "text-school-navy font-semibold hover:text-school-gold",
        },
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
