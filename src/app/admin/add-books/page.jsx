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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";

const books = [
  {
    id: "BK-2481",
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy",
    status: "Published",
  },
  {
    id: "BK-1920",
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    status: "Draft",
  },
  {
    id: "BK-1673",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    status: "Published",
  },
];

export default function AdminBooksPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Manage Books
              </h1>
              <p className="text-[11px] text-muted-foreground">
                3 books in catalog · Use the actions menu to view, edit, or
                delete.
              </p>
            </div>
            <Button size="sm" className="rounded-full text-xs px-3">
              Add new book
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Overview of all books in your catalog. Later you can connect this
            table to your real data and actions.
          </p>
          <Table className="border border-border rounded-xl bg-card">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[110px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead className="w-[120px] text-right">Status</TableHead>
                <TableHead className="w-[140px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-medium">{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        book.status === "Published"
                          ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700"
                          : "inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700"
                      }
                    >
                      {book.status}
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
                      <DropdownMenuContent align="end" className="w-32">
                        <DropdownMenuItem className="text-xs">
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  );
}
