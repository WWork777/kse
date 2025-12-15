import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/Header/Header";

const bebasNeue = localFont({
  src: [
    {
      path: "./fonts/Bebas-Neue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Bebas-Neue-Bold.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
