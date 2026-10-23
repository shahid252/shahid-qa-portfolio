import "./globals.css";
import { Fraunces, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Shahid Rasheed · SQA Automation Engineer",
    template: "%s · Shahid Rasheed",
  },
  description:
    "Portfolio of Shahid Rasheed, an SQA Automation Engineer in Karachi. Playwright, Selenium, Appium, API automation, and CI for fintech, ride-hailing, hiring, and digital banking.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#f3eee4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
