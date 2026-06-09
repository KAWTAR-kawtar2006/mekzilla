import "./globals.css";
import "../i18n/i18n";
import { Roboto } from "next/font/google";
import ScrollTop from "@/components/scrollTop";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className={roboto.className}>{children}
         <ScrollTop />
      </body>
    </html>
  );
}
