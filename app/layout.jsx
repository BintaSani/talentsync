import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClearLink",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className } style={{overflowX: 'hidden'}}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
