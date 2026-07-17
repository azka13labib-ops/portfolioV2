import type { Metadata } from "next";
import { Orbitron, Caveat, Space_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azka Labib | Portfolio",
  description: "Azka Labib - Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${caveat.variable} ${spaceMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-[#FB64B6] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}


