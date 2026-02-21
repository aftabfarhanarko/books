"use client";

const tutorialVideos = [
  "https://www.youtube.com/embed/WRvotdUvNEw",
  "https://www.youtube.com/embed/HM0dK5Tt9Nc",
  "https://www.youtube.com/embed/BkYQHcF3JxE",
  "https://www.youtube.com/embed/9T8I4pQZ_C4",
  "https://www.youtube.com/embed/5b7bZ_hgfIY",
  "https://www.youtube.com/embed/3yQ9W2G3yt8",
  "https://www.youtube.com/embed/gB2ehQ73W6E",
  "https://www.youtube.com/embed/9pWZ_4GZ7ZU",
  "https://www.youtube.com/embed/4N2zHv4ZRxA",
  "https://www.youtube.com/embed/3V1V3cj7cQ4",
  "https://www.youtube.com/embed/6v2L2UGZJAM",
  "https://www.youtube.com/embed/bJzF5ZkVwUc",
];

export default function HelpPage() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-5 shadow-lg shadow-slate-950/40">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-slate-50">
              Tutorials & Reading Tips
            </h1>
            <p className="text-xs text-slate-400">
              Watch book recommendations, reviews, and reading habit tips.
            </p>
          </div>
          <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[11px] text-indigo-200">
            10+ curated videos
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tutorialVideos.map((src) => (
            <div
              key={src}
              className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950"
            >
              <iframe
                src={src}
                title="Book tutorial"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
