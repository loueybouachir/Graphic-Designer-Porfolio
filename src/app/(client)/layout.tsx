import type { Metadata } from "next";
import "../globals.css";
import {Archivo} from 'next/font/google';
import Preloader from "@/sections/Preloader";
import SocialDock from "@/sections/SocialDock";

//src/app/(client)/layout.tsx

const archivo = Archivo({
  display: 'swap',
  subsets: ['latin'],
  weight:"variable",
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: "Rayen El maamoun",
  description: "EDITOR, VFX ARTIST & CONTENT CREATOR",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`antialiased ${archivo.variable} font-sans`}
      >
        
         <Preloader />
        {children}
        <SocialDock />
      </body>
    </html>
  );
}
