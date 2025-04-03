import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container/Container";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "My developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-zinc-950`}
      >
        <Container>
          <LanguageProvider>{children}</LanguageProvider>
        </Container>
      </body>
    </html>
  );
}
