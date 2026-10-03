import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarmCart | Fresh from local farms",
  description: "A marketplace connecting farms to end users.",
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
