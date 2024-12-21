import "./globals.css";
import Navbar from "../components/Navbar";
import { roboto, poppins } from "./fonts";

export const metadata = {
  title: "Situs Next.js",
  description: "Belajar Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable + " " + poppins.variable}>
      <body className="flex flex-col bg-gray-100 p-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">footer</footer>
      </body>
    </html>
  );
}
