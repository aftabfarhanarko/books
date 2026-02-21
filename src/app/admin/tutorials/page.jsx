const tutorials = [
  {
    title: "How to choose your next favorite book",
    url: "https://www.youtube.com/watch?v=WRvotdUvNEw",
    category: "Recommendations",
  },
  {
    title: "Building a daily reading habit",
    url: "https://www.youtube.com/watch?v=HM0dK5Tt9Nc",
    category: "Habits",
  },
  {
    title: "Organizing your digital library",
    url: "https://www.youtube.com/watch?v=BkYQHcF3JxE",
    category: "Library",
  },
];

export default function AdminTutorialsPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-foreground">
              Manage Tutorials
            </h1>
            <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:opacity-90">
              Add YouTube link
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Preview a few YouTube tutorials directly inside the admin panel.
            Later you can connect this list to real data.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {tutorials.map((item) => {
              const embedUrl = item.url.replace("watch?v=", "embed/");
              return (
                <article
                  key={item.url}
                  className="rounded-2xl border border-border bg-card p-3 shadow-sm flex flex-col gap-2"
                >
                  <div className="w-full h-40 rounded-xl overflow-hidden border border-border bg-black">
                    <iframe
                      src={embedUrl}
                      title={item.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm font-medium text-foreground line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-[11px] text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
