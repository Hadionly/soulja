import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soulja",
  description:
    "Soulja's official merch store. Shop for high-quality handmade clothing, accessories, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
