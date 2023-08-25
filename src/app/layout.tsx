import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./globals.css";
import "./grid.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="tp-BR" suppressHydrationWarning >
      <body className={`${poppins.className}`} >
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
