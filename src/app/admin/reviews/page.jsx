"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontalIcon, Search, Star } from "lucide-react";

const initialReviews = [
  {
    id: "REV-101",
    bookTitle: "The Midnight Library",
    userName: "Nusrat Jahan",
    rating: 5,
    excerpt: "Beautiful story about second chances. Highly recommended!",
    status: "Pending",
  },
  {
    id: "REV-102",
    bookTitle: "Deep Work",
    userName: "Rahim Uddin",
    rating: 4,
    excerpt: "Great ideas but some chapters feel a bit long.",
    status: "Approved",
  },
  {
    id: "REV-103",
    bookTitle: "Atomic Habits",
    userName: "Karim Ali",
    rating: 2,
    excerpt: "Did not match my expectations, too basic for me.",
    status: "Flagged",
  },
  {
    id: "REV-104",
    bookTitle: "Book Lovers",
    userName: "Sara Akter",
    rating: 5,
    excerpt: "Perfect cozy read for the weekend, loved all the characters.",
    status: "Pending",
  },
];

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredReviews = useMemo(() => {
    let data = reviews;

    if (filterStatus !== "All") {
      data = data.filter((review) => review.status === filterStatus);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (review) =>
          review.bookTitle.toLowerCase().includes(q) ||
          review.userName.toLowerCase().includes(q)
      );
    }

    return data;
  }, [reviews, query, filterStatus]);

  const handleStatusChange = (id, status) => {
    setReviews((prev) =>
      prev.map((review) => (review.id === id ? { ...review, status } : review))
    );
  };

  const stats = useMemo(() => {
    const total = reviews.length;
    const pending = reviews.filter((r) => r.status === "Pending").length;
    const approved = reviews.filter((r) => r.status === "Approved").length;
    const flagged = reviews.filter((r) => r.status === "Flagged").length;
    return { total, pending, approved, flagged };
  }, [reviews]);

  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Review Moderation
              </h1>
              <p className="text-[11px] text-muted-foreground">
                Approve, flag, or delete reviews submitted by readers.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === "All" ? "default" : "outline"}
                size="xs"
                className="rounded-full text-[11px] px-3"
                onClick={() => setFilterStatus("All")}
              >
                All ({stats.total})
              </Button>
              <Button
                variant={filterStatus === "Pending" ? "default" : "outline"}
                size="xs"
                className="rounded-full text-[11px] px-3"
                onClick={() => setFilterStatus("Pending")}
              >
                Pending ({stats.pending})
              </Button>
              <Button
                variant={filterStatus === "Approved" ? "default" : "outline"}
                size="xs"
                className="rounded-full text-[11px] px-3"
                onClick={() => setFilterStatus("Approved")}
              >
                Approved ({stats.approved})
              </Button>
              <Button
                variant={filterStatus === "Flagged" ? "default" : "outline"}
                size="xs"
                className="rounded-full text-[11px] px-3"
                onClick={() => setFilterStatus("Flagged")}
              >
                Flagged ({stats.flagged})
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card px-4 py-3">
              <p className="text-[11px] text-muted-foreground mb-1">
                Pending
              </p>
              <p className="text-xl font-semibold text-foreground">
                {stats.pending}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-4 py-3">
              <p className="text-[11px] text-muted-foreground mb-1">
                Approved
              </p>
              <p className="text-xl font-semibold text-foreground">
                {stats.approved}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-4 py-3">
              <p className="text-[11px] text-muted-foreground mb-1">
                Flagged
              </p>
              <p className="text-xl font-semibold text-foreground">
                {stats.flagged}
              </p>
            </div>
          </div>

          <section className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
            <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-sm font-semibold text-foreground">
                  Review queue
                </h2>
                <p className="text-[11px] text-muted-foreground">
                  Search by book or user and moderate individual reviews.
                </p>
              </div>
              <div className="flex w-full gap-2 sm:w-auto sm:min-w-[260px]">
                <div className="flex flex-1 items-center gap-2 rounded-xl border border-input bg-background px-3 py-2">
                  <Search className="size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by book or user..."
                    className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Table className="border border-border rounded-xl bg-card">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[110px]">ID</TableHead>
                  <TableHead>Book</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="w-[90px] text-right">Rating</TableHead>
                  <TableHead>Excerpt</TableHead>
                  <TableHead className="w-[110px] text-right">Status</TableHead>
                  <TableHead className="w-[140px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.id}</TableCell>
                    <TableCell>{review.bookTitle}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="size-8 bg-sky-50">
                          <AvatarFallback className="text-[11px] font-semibold text-sky-600">
                            {review.userName
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{review.userName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={
                              star <= review.rating
                                ? "size-3 text-amber-400 fill-amber-400"
                                : "size-3 text-slate-300"
                            }
                          />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs text-xs text-muted-foreground line-clamp-2">
                      {review.excerpt}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          review.status === "Approved"
                            ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700"
                            : review.status === "Pending"
                            ? "inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-medium text-sky-700"
                            : "inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700"
                        }
                      >
                        {review.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-full border border-border text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontalIcon className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44">
                          <DropdownMenuItem className="text-xs">
                            View full review
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-xs"
                            onClick={() =>
                              handleStatusChange(review.id, "Approved")
                            }
                          >
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-xs"
                            onClick={() =>
                              handleStatusChange(review.id, "Pending")
                            }
                          >
                            Mark pending
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-xs"
                            onClick={() =>
                              handleStatusChange(review.id, "Flagged")
                            }
                          >
                            Flag for review
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-xs"
                            variant="destructive"
                          >
                            Delete review
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </section>
      </main>
    </div>
  );
}
