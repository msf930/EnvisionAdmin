import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import { afacad, cormorant } from "./google-fonts/font";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Envision Administrative Services",
  description:
    "Expert operational and accounting support to optimize your cash flow and eliminate back office administrative burden, so you can focus on what matters most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${afacad.variable} ${cormorant.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
