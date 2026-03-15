"use client";

import {
  Users,
  BookOpen,
  Star,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = {
  totalUsers: 1240,
  usersTrend: { label: "+4.1% this week", direction: "up" },
  totalBooks: 982,
  booksTrend: { label: "+1.8% this week", direction: "up" },
  totalReviews: 347,
  reviewsTrend: { label: "+6.4% this week", direction: "up" },
  totalCategories: 24,
  categoriesTrend: { label: "4 featured", direction: "flat" },
};

const weeklyNewUsers = [
  { day: "Mon", value: 22 },
  { day: "Tue", value: 25 },
  { day: "Wed", value: 21 },
  { day: "Thu", value: 33 },
  { day: "Fri", value: 28 },
  { day: "Sat", value: 29 },
  { day: "Sun", value: 26 },
];

const weeklyNewBooks = [
  { day: "Mon", value: 6 },
  { day: "Tue", value: 9 },
  { day: "Wed", value: 5 },
  { day: "Thu", value: 11 },
  { day: "Fri", value: 7 },
  { day: "Sat", value: 10 },
  { day: "Sun", value: 8 },
];

const recentUsers = [
  { id: "USR-1098", name: "Arif Hossain", email: "arif.h@example.com", joined: "2h ago" },
  { id: "USR-1097", name: "Mitu Rahman", email: "mitu.r@example.com", joined: "6h ago" },
  { id: "USR-1096", name: "Tanvir Alam", email: "tanvir.a@example.com", joined: "1d ago" },
  { id: "USR-1095", name: "Sadia Khan", email: "sadia.k@example.com", joined: "2d ago" },
];

const recentBooks = [
  { id: "BK-354", title: "Deep Work", author: "Cal Newport", genre: "Productivity", added: "3h ago" },
  { id: "BK-353", title: "Ikigai", author: "Hector Garcia", genre: "Self-help", added: "9h ago" },
  { id: "BK-352", title: "Project Hail Mary", author: "Andy Weir", genre: "Sci‑Fi", added: "1d ago" },
  { id: "BK-351", title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", added: "2d ago" },
];

const AdminDashbordpage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Admin overview
              </h1>
              <p className="text-[11px] text-muted-foreground">
                High level stats for users, books, reviews, and categories.
              </p>
            </div>
            <div>
              <select className="border border-input bg-background text-xs rounded-full px-3 py-1.5 outline-none">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 12 months</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <DashboardCard
              icon={Users}
              label="Total users"
              value={metrics.totalUsers}
              trend={metrics.usersTrend}
            />
            <DashboardCard
              icon={BookOpen}
              label="Total books"
              value={metrics.totalBooks}
              trend={metrics.booksTrend}
            />
            <DashboardCard
              icon={Star}
              label="Total reviews"
              value={metrics.totalReviews}
              trend={metrics.reviewsTrend}
            />
            <DashboardCard
              icon={Layers}
              label="Total categories"
              value={metrics.totalCategories}
              trend={metrics.categoriesTrend}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                New users (last 7 days)
              </h2>
              <p className="text-[11px] text-muted-foreground mb-4">
                Count of readers who created accounts over the past week.
              </p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyNewUsers}>
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
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
                    <Bar dataKey="value" radius={8} fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                New books (last 7 days)
              </h2>
              <p className="text-[11px] text-muted-foreground mb-4">
                Number of books added to the catalog over the past week.
              </p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyNewBooks}>
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--secondary) / 0.1)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        fontSize: 11,
                      }}
                    />
                    <Bar dataKey="value" radius={8} fill="hsl(var(--secondary-foreground))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                Recent signups
              </h2>
              <p className="text-[11px] text-muted-foreground mb-3">
                Latest readers who joined.
              </p>
              <ul className="divide-y divide-border rounded-xl border border-border/60 bg-background overflow-hidden">
                {recentUsers.map((u) => (
                  <li key={u.id} className="flex items-center justify-between px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{u.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{u.email}</p>
                    </div>
                    <span className="text-[11px] text-muted-foreground">{u.joined}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                Recently added books
              </h2>
              <p className="text-[11px] text-muted-foreground mb-3">
                Latest catalog updates.
              </p>
              <ul className="divide-y divide-border rounded-xl border border-border/60 bg-background overflow-hidden">
                {recentBooks.map((b) => (
                  <li key={b.id} className="flex items-center justify-between px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{b.title}</p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {b.author} • {b.genre}
                      </p>
                    </div>
                    <span className="text-[11px] text-muted-foreground">{b.added}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function DashboardCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-4 flex flex-col gap-2 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary">
          <Icon className="size-4" />
        </div>
      </div>
      <p className="text-xl font-semibold text-foreground">{value}</p>
      <div className="flex items-center gap-1">
        {trend?.direction === "up" && (
          <ArrowUpRight className="size-3.5 text-emerald-600" />
        )}
        {trend?.direction === "down" && (
          <ArrowDownRight className="size-3.5 text-red-600" />
        )}
        <p className="text-[11px] text-muted-foreground">{trend?.label}</p>
      </div>
    </div>
  );
}

export default AdminDashbordpage;
