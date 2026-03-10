"use client";

import { BookOpen, Heart, ListTodo, GraduationCap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const userMetrics = {
  readBooks: 24,
  wishlistCount: 12,
  favoriteBooks: 8,
  visitedTutorials: 15,
};

const monthlyReading = [
  { month: "Jan", books: 2 },
  { month: "Feb", books: 3 },
  { month: "Mar", books: 4 },
  { month: "Apr", books: 3 },
  { month: "May", books: 5 },
  { month: "Jun", books: 4 },
];

const Userpage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-foreground">
              Reading overview
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Track your finished books, wishlist, favorites, and tutorials.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <UserStatCard
              icon={BookOpen}
              label="Read books"
              value={userMetrics.readBooks}
              tone="primary"
            />
            <UserStatCard
              icon={ListTodo}
              label="Wishlist"
              value={userMetrics.wishlistCount}
              tone="secondary"
            />
            <UserStatCard
              icon={Heart}
              label="Favorite books"
              value={userMetrics.favoriteBooks}
              tone="accent"
            />
            <UserStatCard
              icon={GraduationCap}
              label="Visited tutorials"
              value={userMetrics.visitedTutorials}
              tone="muted"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                Books read per month
              </h2>
              <p className="text-[11px] text-muted-foreground mb-4">
                Simple Recharts graph showing your recent reading activity.
              </p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyReading}>
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      allowDecimals={false}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--primary) / 0.04)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        fontSize: 11,
                      }}
                    />
                    <Bar dataKey="books" radius={8} fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm flex flex-col gap-3">
              <h2 className="text-md font-semibold text-foreground">
                Quick summary
              </h2>
              <p className="text-[11px] text-muted-foreground">
                This is demo data. Later you can plug in real counts from your
                backend for books, wishlist, favorites, and tutorials.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• Keep reading to grow your finished books count.</li>
                <li>• Use wishlist to remember books you want to read next.</li>
                <li>• Mark books as favorite to find them quickly.</li>
                <li>• Revisit tutorials you liked to improve your skills.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function UserStatCard({ icon: Icon, label, value, tone }) {
  const toneClass =
    tone === "primary"
      ? "bg-sky-50 text-sky-600"
      : tone === "secondary"
      ? "bg-emerald-50 text-emerald-600"
      : tone === "accent"
      ? "bg-pink-50 text-pink-600"
      : "bg-slate-50 text-slate-600";

  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-3.5 flex flex-col gap-2 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${toneClass}`}
        >
          <Icon className="size-4" />
        </div>
      </div>
      <p className="text-xl font-semibold text-foreground">{value}</p>
    </div>
  );
}

export default Userpage;
