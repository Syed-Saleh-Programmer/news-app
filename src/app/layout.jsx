import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import categories from "@/data/categories";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NewsWeek top Headlines news.",
  description: "Get the latest headlines from 1000s of sources in one place.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full min-h-screen">
          <Header categories={categories}/>
          <section className="w-full px-6 md:px-12 lg:px-20 py-10">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
