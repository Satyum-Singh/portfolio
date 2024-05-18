import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContext from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
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
    // This is comment is being only for theme check
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative h-max pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] -rotate-45 absolute top-[35rem] right-[5rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem]
          sm:w-[68.75rem] dark:bg-gradient-to-br from-[#fc00ff] to-[#00dbde]
        "
        ></div>
        <div
          className="bg-[#dbd7fb] rotate-45 absolute top-[10rem] left-[15rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-gradient-to-tr from-[#8A2387] via-[#E94057] to-[#F27121]
        "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContext>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
