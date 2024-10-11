import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Suheb Ahmed Portfolio",
  description: "Product Design | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className='bg-gradient-to-bl from-[#E94F54] to-[#EC935F]'
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
