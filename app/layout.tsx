import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeNavbar from "./commons/HomeNavbar";
import { usePathname } from "next/navigation";
import GeneralNavbar from "./commons/GeneralNavbar";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mimotar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="py-7">
          <div className="min-[1440px]:w-[80%] w-[95%] mx-auto">
            <HomeNavbar />
          </div>
        </main>
        <section className="">{children}</section>
      </body>
    </html>
  );
}
