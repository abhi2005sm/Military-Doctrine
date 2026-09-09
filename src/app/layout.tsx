import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CompareProvider } from "../context/CompareContext";
import { CompareTray } from "../components/catalog/CompareTray";

export const metadata: Metadata = {
  title: "Blackstone — Global Military Asset Catalog",
  description: "Visual, browsable reference catalog of publicly known military assets (land, air, naval) with technical specifications, comparative ratings, and open-source citations.",
  keywords: ["military catalog", "defense intelligence", "main battle tanks", "fighter jets", "submarines", "warships", "OSINT"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className="flex flex-col min-h-screen text-slate-900 bg-slate-50 antialiased selection:bg-sky-900 selection:text-white">
        <CompareProvider>
          <Header />
          <main className="flex-1 bg-grid-pattern">{children}</main>
          <CompareTray />
          <Footer />
        </CompareProvider>
      </body>
    </html>
  );
}
