"use client";

import Link from "next/link";
import { Bell, LogIn, Search, UserPlus } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-slate-950/40">
      <div className="flex items-center justify-end gap-4 px-4 sm:px-6 h-16 max-w-7xl mx-auto">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 px-3 py-2 shadow-sm shadow-slate-950/60">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              className="w-full bg-transparent text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 outline-none"
              placeholder="Search books, authors, genres..."
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 transition"
          >
            <LogIn size={16} strokeWidth={2} />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 shadow-md shadow-sky-500/30 transition"
          >
            <UserPlus size={16} strokeWidth={2} />
            <span>Register</span>
          </Link>
          <button
            type="button"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-sky-400 hover:border-sky-500/60 transition"
            aria-label="Notifications"
          >
            <Bell size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
