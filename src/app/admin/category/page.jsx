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

const categories = [
  {
    id: "CAT-001",
    name: "Fantasy",
    description: "Magic, alternate worlds, and mythical creatures.",
    books: 42,
    status: "Active",
  },
  {
    id: "CAT-002",
    name: "Productivity",
    description: "Deep work, focus, and time management.",
    books: 18,
    status: "Active",
  },
  {
    id: "CAT-003",
    name: "Self-help",
    description: "Habits, mindset, and personal growth.",
    books: 27,
    status: "Hidden",
  },
];

export default function Categorypage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Manage Categories
              </h1>
              <p className="text-[11px] text-muted-foreground">
                {categories.length} categories · Group your books into clear
                sections.
              </p>
            </div>
            <Button size="sm" className="rounded-full text-xs px-3">
              Add category
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mb-4">
            Create and organize categories for your library. Later you can
            connect this table to your real data and actions.
          </p>

          <Table className="border border-border rounded-xl bg-card">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[110px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[110px] text-right">Books</TableHead>
                <TableHead className="w-[120px] text-right">Status</TableHead>
                <TableHead className="w-[140px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell className="max-w-xs truncate text-muted-foreground">
                    {category.description}
                  </TableCell>
                  <TableCell className="text-right">{category.books}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        category.status === "Active"
                          ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700"
                          : "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                      }
                    >
                      {category.status}
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
                        <DropdownMenuItem className="text-xs text-destructive">
                            Active
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
