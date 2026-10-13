
import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BookingsLayoutContent from "./components/BookingsLayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis TMS | Bookings",
  description: "Manage transport bookings",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense fallback={<div>Loading Bookings...</div>}>
          <BookingsLayoutContent>
            {children}
          </BookingsLayoutContent>
        </Suspense>
      </body>
    </html>
  );
}