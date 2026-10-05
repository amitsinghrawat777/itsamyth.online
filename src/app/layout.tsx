import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ClickSparks } from "@/components/ClickSparks";
import { links, profile } from "@/data/portfolio";
import "./globals.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel", display: "swap" });
const body = VT323({ weight: "400", subsets: ["latin"], variable: "--font-body", display: "swap" });

const description = `${profile.handle} (${profile.name}) is a full stack developer from Dehradun building fast web apps with React, Next.js, Node and Cloudflare.`;
const title = `${profile.handle} (${profile.name}) — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(links.website),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.handle,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#14121f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${body.variable}`}>
      <body>
        {children}
        <ClickSparks />
      </body>
    </html>
  );
}
