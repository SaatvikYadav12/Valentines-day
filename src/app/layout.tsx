import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something I made for you ❤️",
  description:
    "I love you so much, and I hope you enjoy this!💕",
  keywords: [
    "valentine's day",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
