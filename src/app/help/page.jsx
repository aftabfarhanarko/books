"use client";

import { Button } from "@/components/ui/button";

const HelpCenter = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6 max-w-4xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Help Center
              </h1>
              <p className="text-[11px] text-muted-foreground">
                Find quick answers about using BookWorm or contact us if you are
                stuck.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 text-xs"
            >
              Open help form
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm space-y-3">
              <h2 className="text-sm font-semibold text-foreground">
                Common questions
              </h2>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    How do I add a new book to my library?
                  </p>
                  <p>
                    Use the “Admin Add Books” page to add books, or from the
                    user side save books to “My library” from the all books
                    page. Right now everything is demo data only.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Why are my stats and charts using demo numbers?
                  </p>
                  <p>
                    The dashboards show sample data to help you visualize how
                    the app will look. Later you can connect these sections to
                    real backend data.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    How can I change language or notifications?
                  </p>
                  <p>
                    Go to the Settings page and update your reading preferences
                    and notification options. These controls are also demo only
                    for now.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm space-y-3">
              <h2 className="text-sm font-semibold text-foreground">
                Need more help?
              </h2>
              <p className="text-[11px] text-muted-foreground">
                If you cannot find your answer in the FAQs, you can use our
                help form to send us details. We will respond as soon as the
                real backend is connected.
              </p>
              <Button
                variant="default"
                size="sm"
                className="rounded-full px-4 text-xs w-full"
              >
                Fill help form
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HelpCenter;
