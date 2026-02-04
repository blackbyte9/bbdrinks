import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InventoryProvider } from "@/contexts/InventoryContext";
import { Toaster } from "@/components/ui/sonner";
import { AuthProviders } from "@/components/auth/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bonanzbar Organizer",
  description: "Inventur und Einkaufliste für die Bonanzbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <AuthProviders>
          <InventoryProvider>
            {children}
          </InventoryProvider>
          <Toaster />
        </AuthProviders>
      </body>
    </html>
  );
}
