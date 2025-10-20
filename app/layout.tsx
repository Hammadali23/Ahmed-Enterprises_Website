import "./styles/globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import SplashScreen from "../src/components/SplashScreen";
import SplashProvider from "../src/components/SplashProvider";
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
        <SplashProvider>
          <SplashScreen />
          <Navbar />
          {children}
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}