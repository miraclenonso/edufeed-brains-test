import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Edufeed Brains",
  description: "Education feeds the brain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
      >
        {/* Fixed Header */}
        <div className="fixed-header">
          <Header />
        </div>

        {/* Main content */}
        <main className="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
