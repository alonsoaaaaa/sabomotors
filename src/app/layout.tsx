import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
declare global {
  interface Window {
    dataLayer: any[];
  }
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabo Motors",
  description: "Sabo Motors",

  other: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag() { dataLayer.push(arguments); }
     gtag('js', new Date());
     gtag('config', 'G-N25S5DTVYN');
   `,
          }}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
