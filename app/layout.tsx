import "./styles/globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Enterprises - HVAC Services",
  description: "Professional HVAC repair and maintenance services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
