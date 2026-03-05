import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { LanguageProvider } from "../i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Createch - Juntos impulsamos tu crecimiento",
  description: "La cadena de suministro que necesitamos, los efectos especiales que nos sorprenden, juntos, podemos reinventar cualquier cosa.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
