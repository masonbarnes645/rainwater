import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import CustomAppBar from "./components/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400']

})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <CustomAppBar />
        {children}
      </body>
    </html>
  );
}
