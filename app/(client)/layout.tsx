import "../../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import HomeNavbar from "./component/HomeNavbar";
import { usePathname } from "next/navigation";
import GeneralNavbar from "./component/GeneralNavbar";
import { headers } from "next/headers";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import HomeNavbar from "./component/HomeNavbar";

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
  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path") || "";

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="h-screen w-screen overflow-auto">
          <div className="py-7 h-[100px] flex items-center ">
            <div className="min-[1440px]:w-[80%] w-[95%] mx-auto">
              <HomeNavbar />
            </div>
          </div>
          <ScrollArea data-state="hidden" className="">
            <section className=" h-[calc(100vh-100px)] ">{children}</section>
            <ScrollAreaScrollbar hidden={false} />
          </ScrollArea>
        </main>
      </body>
    </html>
  );
}
