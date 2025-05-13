import type { Metadata } from "next";
import { Inter } from "next/font/google"; // استبدال Geist بـ Inter
import "./globals.css";
import Header from "@/components/header/Header";

import ScrollTop from "@/components/ScrollTop";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { ToastContainer } from "react-toastify";
import { Directions, Languages } from "@/constants/enums";

import { Locale } from "@/i18n.config";
import Trans from "@/components/trans";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Exclusive is a fashion website for women",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;
  const t = await Trans();
  const { navigation } = t;
  const isAdminRoute = (await params).locale.startsWith(`/admin`); // Check if route is admin

  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
      suppressHydrationWarning={true}
    >
      <body
        className={`${inter.variable} antialiased w-full mx-auto bg-[#FFFFFF] overflow-x-hidden`}
      >
        <ReduxProvider>
          <ToastContainer position="bottom-right" />
          {!isAdminRoute && <Header t={navigation} />}
          {!isAdminRoute && (
            <div className="h-[1px] w-full bg-[#E5E5E5] absolute top-[80px] left-0 z-10"></div>
          )}
          <main
            className={`relative max-w-7xl mx-auto px-4 md:px-6 ${
              !isAdminRoute ? "pt-[80px] min-h-[calc(100vh-80px)]" : ""
            }`}
          >
            {children}
            <ScrollTop />
          </main>
          {!isAdminRoute && <Footer />}
        </ReduxProvider>
      </body>
    </html>
  );
}
