"use client";

import { Button } from "@/components/ui/button";

const Settingspage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6 max-w-3xl">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-foreground">
              Application settings
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Control how BookWorm behaves for your account and reading
              experience.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">
              Reading preferences
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Default reading theme
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Light or dark mode for book pages. This is only a visual
                    preference for now.
                  </p>
                </div>
                <select className="border border-input bg-background text-xs rounded-md px-2 py-1 outline-none">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Preferred language
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Language used when we show recommendations and tutorials.
                  </p>
                </div>
                <select className="border border-input bg-background text-xs rounded-md px-2 py-1 outline-none">
                  <option>English</option>
                  <option>বাংলা</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">
              Notifications
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Email updates
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Get a summary when new books or tutorials are added.
                  </p>
                </div>
                <select className="border border-input bg-background text-xs rounded-md px-2 py-1 outline-none">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Reading reminders
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Simple reminder to continue your current reading streak.
                  </p>
                </div>
                <select className="border border-input bg-background text-xs rounded-md px-2 py-1 outline-none">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Never</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">
              Account
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Export data
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Download a copy of your books, favorites, and activity in a
                    simple file.
                  </p>
                </div>
                <Button variant="outline" size="xs" className="rounded-full px-3">
                  Download export
                </Button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-destructive">
                    Delete library data
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Remove saved books and reading history from this account.
                    This is only a placeholder action.
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="xs"
                  className="rounded-full px-3"
                >
                  Clear library
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settingspage;
