import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Property Listing App",
  description: "Discover properties to buy and rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <header className="border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 sticky top-0 z-50">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-primary-600 font-semibold text-xl">PropertyHub</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a href="#buy" className="hover:text-primary-600">Buy</a>
              <a href="#rent" className="hover:text-primary-600">Rent</a>
              <a href="#commercial" className="hover:text-primary-600">Commercial</a>
              <a href="#agents" className="hover:text-primary-600">Agents</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center px-3 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700">Post Property</button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t">
          <div className="container py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} PropertyHub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
