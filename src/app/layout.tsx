import type { Metadata } from "next";
import "./globals.css";
import { Eczar, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const eczar = Eczar({
  weight: ["400", "500", "600", "800", "700"],
  subsets: ["latin"],
  variable: "--font-eczar",
});
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "800", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "DAMRI ABDELLAH - Homepage Portfolio",
  description:
    "DAMRI ABDELLAH - Portfolio - Full Stack Developer - React - Next.js - TailwindCSS - Node.js - Express - MongoDB - PostgreSQL - Docker ",
  keywords:
    "DAMRI ABDELLAH, Portfolio, Full Stack Developer, React, Next.js, TailwindCSS, Node.js, Express, MongoDB, PostgreSQL, Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eczar.variable} ${openSans.variable} font-sans antialiased`}
      >
        <BackgroundPattern />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
