import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AOSProvider from "./components/AOSProvider";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wendryus",
  description: "Wendryus Dev Front-End ",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      {
        url: "/logoWhite.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
