
import { Geist, Geist_Mono, Prosto_One } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import content from '../../data/content';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prostoOne = Prosto_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-prosto-one',
  display: 'swap',
});

const { siteTitle, siteDescription } = content;

export const metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${prostoOne.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
