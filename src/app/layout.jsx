import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/nav/Sidebar";
import TopNevbar from "@/components/nav/TopNevbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookWorm",
  description: "Book recommendation and reading tracker dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white p-4">
            <Sidebar></Sidebar>
          </aside>

          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Navbar */}
            <header className="h-16 bg-white border-b flex items-center px-6">
              <TopNevbar></TopNevbar>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
