import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Embedding Widget in Next.js",
  description: "Created by Krishnarjun Nanda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
