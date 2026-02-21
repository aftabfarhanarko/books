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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900`}
      >
        <div className="flex min-h-screen flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-64 border-r border-slate-200 bg-white">
            <Sidebar />
          </aside>

          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Navbar */}
            <TopNevbar />
            {/* Page Content */}
            <main className="flex-1 p-4 md:p-6 bg-white">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
