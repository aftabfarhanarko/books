"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, BookOpen, LogIn, Menu, Search, UserPlus } from "lucide-react";
import Sidebar from "@/components/nav/Sidebar";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 h-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-sky-500 hover:border-sky-300 transition md:hidden"
              aria-label="Toggle sidebar"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
            {/* <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-sm">
                <BookOpen size={18} strokeWidth={2} />
              </div>
              <span className="hidden lg:inline text-sm font-semibold tracking-tight text-slate-900">
                Book dashboard
              </span>
            </div> */}
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="w-full max-w-md hidden md:block">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-100 border border-slate-200 px-3 py-2 shadow-sm">
                <Search size={16} className="text-slate-400" />
                <input
                  type="text"
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                  placeholder="Search books, authors, genres..."
                />
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-300 transition"
              >
                <LogIn size={16} strokeWidth={2} />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 shadow-md shadow-sky-500/30 transition"
              >
                <UserPlus size={16} strokeWidth={2} />
                <span>Register</span>
              </Link>
              <button
                type="button"
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-sky-500 hover:border-sky-300 transition"
                aria-label="Notifications"
              >
                <Bell size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          />
          <div className="relative z-50 max-w-[80%] h-full">
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;
