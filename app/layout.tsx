import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import MouseCursor from "@/components/mouse-cursor";
import ActiveSectionContext from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SatyumS Pathania | Portfolio",
  description: "Designer | Developer | Coder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <MouseCursor />
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem]
          sm:w-[68.75rem] 
        "
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        "
        ></div>
        <ActiveSectionContext>
          <Header />
          {children}
        </ActiveSectionContext>
      </body>
    </html>
  );
}
