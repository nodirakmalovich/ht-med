import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <NextIntlClientProvider >
      <html lang='en'>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>

  );
}
