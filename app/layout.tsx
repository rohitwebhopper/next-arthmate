import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthmate",
  description:
    "Arthmate Direct is a next-generation investment platform powered by RBI-approved NBFCs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="blue-logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
