// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import { CartProvider } from "./components/AddItems/cartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopzeraInstrumentosShop",
  description: "Uma Loja de instrumentos musicais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <CartProvider>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
