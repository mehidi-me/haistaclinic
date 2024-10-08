import { GoogleTagManager } from '@next/third-parties/google'
import {  Poppins } from "next/font/google";
import {  Bebas_Neue } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"],variable:'--poppins',display: 'swap'});
const bebasNeue = Bebas_Neue({ subsets: ["latin"],weight: ["400"],variable:'--bebasneue',display: 'swap'});

export const metadata = {
  title: "Hair Transplant Turkey – EN &#8211; Haista Clinic",
  description: "Hair Transplant Turkey – EN &#8211; Haista Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
     className={`${poppins.variable} ${bebasNeue.variable}`}
     >
      <GoogleTagManager gtmId="GTM-WRSSXR4" />
      <body>{children}</body>
    </html>
  );
}
