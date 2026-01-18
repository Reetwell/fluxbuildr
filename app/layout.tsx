import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import MainWrapper from "@/components/MainWrapper";

export const metadata: Metadata = {
  title: "Fluxbuildr | Modern Websites for Your Business",
  description: "Quality websites at affordable prices. Landing pages, business sites, and custom projects built with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
