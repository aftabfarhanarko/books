"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookPlus,
  BookOpen,
  Star,
  GraduationCap,
  Users,
  Library,
  LayoutDashboard,
  BookMarked,
  Settings,
  LogOut,
  Menu,
  X,
  HelpCircle,
} from "lucide-react";

const routes = [
  // Admin
  { label: "Admin Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { label: "Admin Add Books", icon: BookPlus, path: "/admin/add-books" },
  { label: "Admin Category Books", icon: BookOpen, path: "/admin/category" },
  { label: "Admin Tutorials", icon: GraduationCap, path: "/admin/tutorials" },
  { label: "Admin User Manage", icon: Users, path: "/admin/user-manage" },
  { label: "Admin Reviews", icon: Star, path: "/admin/reviews" },

  // User
  { label: "User Dashboard", icon: LayoutDashboard, path: "/user/dashboard" },
  { label: "User All Books", icon: BookOpen, path: "/user/all-books" },
  { label: "User Personal Library", icon: Library, path: "/user/my-library" },
  { label: "User Tutorials", icon: GraduationCap, path: "/user/tutorials" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center rounded-xl border transition-all duration-200 
    ${collapsed ? "justify-center py-3" : "gap-3 px-4 py-2.5"}
    ${
      pathname === path
        ? "bg-sky-50 text-sky-600 font-semibold border-sky-400"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-transparent"
    }`;

  return (
    <aside
      className={`
        ${collapsed ? "w-[72px]" : "w-64"}
        min-h-screen bg-white
        flex flex-col transition-all duration-300 ease-in-out
        border-r border-slate-200 relative overflow-hidden
      `}
    >
      {/* Header */}
      <div
        className={`flex items-center border-b border-slate-200 min-h-[72px]
        ${collapsed ? "justify-center" : "justify-between px-5"}`}
      >
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <BookMarked size={26} className="text-sky-500" strokeWidth={2} />
            <span className="text-slate-900 font-bold text-lg tracking-tight">
              BookVault
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-500 transition-colors cursor-pointer"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Main Nav */}
      <nav
        className={`flex-1 flex flex-col gap-1 py-3 ${
          collapsed ? "px-2" : "px-3"
        }`}
      >
        {routes.map(({ label, icon: Icon, path }) => (
          <Link
            key={path}
            href={path}
            title={collapsed ? label : undefined}
            className={linkClass(path)}
          >
            <Icon
              size={20}
              strokeWidth={pathname === path ? 2.2 : 1.8}
              className="shrink-0"
            />
            {!collapsed && (
              <span className="text-md font-medium whitespace-nowrap">
                {label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="mx-3 border-t border-slate-700/50" />

      {/* Bottom */}
      <div
        className={`flex flex-col gap-1 py-3 ${collapsed ? "px-2" : "px-3"}`}
      >
        {/* Settings */}
        <Link
          href="/settings"
          title={collapsed ? "Settings" : undefined}
          className={linkClass("/settings")}
        >
          <Settings
            size={18}
            strokeWidth={pathname === "/settings" ? 2.2 : 1.8}
          />
          {!collapsed && <span className="text-sm">Settings</span>}
        </Link>

        {/* Help */}
        <Link
          href="/help"
          title={collapsed ? "Help" : undefined}
          className={linkClass("/help")}
        >
          <HelpCircle
            size={18}
            strokeWidth={pathname === "/help" ? 2.2 : 1.8}
          />
          {!collapsed && <span className="text-sm">Help</span>}
        </Link>

        {/* Logout */}
        <Link
          href="/logout"
          title={collapsed ? "Logout" : undefined}
          className={`flex items-center rounded-xl text-red-400
            hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 border-l-4 border-transparent
            ${collapsed ? "justify-center py-3" : "gap-3 px-4 py-2.5"}`}
        >
          <LogOut size={18} strokeWidth={1.8} />
          {!collapsed && <span className="text-sm">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
