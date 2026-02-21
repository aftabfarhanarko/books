
const bookTabs = ["Popular", "Top Selling", "Following", "New"];

const books = [
  { title: "I Owe You One", author: "Sophie Kinsella" },
  { title: "Factfulness", author: "Hans Rosling" },
  { title: "The Other Son", author: "Nick Alexander" },
  { title: "Can You Keep A Secret?", author: "Sophie Kinsella" },
  { title: "Educated", author: "Tara Westover" },
  { title: "In The Company Of Ghosts", author: "Andrew Author" },
  { title: "Invisible Influence", author: "Jonah Berger" },
  { title: "The Power Of Agency", author: "Paul Napper" },
];

const readingList = [
  { title: "Hold Back The Stars", pages: 121, progress: 64 },
  { title: "One Day A Novel", pages: 11, progress: 45 },
  { title: "In The Company Of Ghosts", pages: 21, progress: 52 },
];

const trendingAuthors = [
  { name: "James Elijah", following: false },
  { name: "William Henry", following: false },
  { name: "Aria Abigail", following: false },
  { name: "Mia Evelyn", following: false },
  { name: "Mateo Levi", following: true },
];

const blogs = [
  {
    title: "The Week All You Need To Know About",
    author: "Sheita",
    likes: 122,
    comments: 44,
  },
  {
    title: "Mobile With New App For Designers",
    author: "Malik",
    likes: 88,
    comments: 22,
  },
  {
    title: "Five Ways To Find More Time In Business",
    author: "Sonic",
    likes: 12,
    comments: 4,
  },
];

export default function Home() {
  return (
    <DashboardShell>
      <div className="flex flex-1 overflow-hidden">
        {/* Center Column */}
        <main className="flex-1 overflow-y-auto p-8 flex flex-col gap-10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80">
              {/* Book Section */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 shadow-lg shadow-slate-950/40">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-2">
                    {bookTabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          index === 0
                            ? "bg-indigo-500 text-white shadow shadow-indigo-500/40"
                            : "text-slate-400 hover:bg-slate-800"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="text-xs text-indigo-400 font-medium hover:text-indigo-300">
                    Next ▸
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {books.map((book) => (
                    <article
                      key={book.title}
                      className="flex flex-col gap-2 cursor-pointer group"
                    >
                      <div className="h-40 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 flex items-center justify-center shadow-xl shadow-indigo-900/50 group-hover:scale-105 transition-transform">
                        <span className="text-white font-semibold text-lg opacity-90">
                          {book.title.split(" ")[0]}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-50 leading-tight line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-xs text-slate-400">{book.author}</p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Currently Reading */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 shadow-lg shadow-slate-950/40">
                <h2 className="text-base font-bold text-slate-50 mb-4">
                  Currently Reading
                </h2>
                <div className="flex flex-col gap-3">
                  {readingList.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between bg-slate-900 rounded-xl px-4 py-3 border border-slate-800/80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex-shrink-0 shadow-md shadow-pink-900/40" />
                        <div>
                          <div className="text-sm font-semibold text-slate-50">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {item.pages} pages
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 w-40">
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded-full transition-all"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-400">
                          {item.progress}% complete
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
        </main>

        {/* Right Panel */}
        <aside className="w-72 border-l border-slate-800 overflow-y-auto p-6 flex flex-col gap-8 bg-slate-950/90 flex-shrink-0">
              {/* Trending Authors */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4">
                <h2 className="text-base font-bold text-slate-50 mb-4">
                  Trending Authors
                </h2>
                <div className="flex flex-col gap-3">
                  {trendingAuthors.map((author) => (
                    <div
                      key={author.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0 shadow-md shadow-cyan-900/50" />
                        <span className="text-sm font-medium text-slate-50">
                          {author.name}
                        </span>
                      </div>
                      <button
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                          author.following
                            ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                            : "bg-indigo-600 text-white hover:bg-indigo-500"
                        }`}
                      >
                        {author.following ? "Unfollow" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Blogs */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4">
                <h2 className="text-base font-bold text-slate-100 mb-4">
                  Popular Blogs
                </h2>
                <div className="flex flex-col gap-4">
                  {blogs.map((blog) => (
                    <article key={blog.title} className="flex gap-3">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0" />
                      <div className="flex flex-col justify-between">
                        <div className="text-sm font-semibold text-slate-100 leading-tight line-clamp-2">
                          {blog.title}
                        </div>
                        <div className="text-xs text-slate-400">
                          Published by {blog.author}
                        </div>
                        <div className="flex gap-3 text-xs text-slate-500 mt-1">
                          <span>👍 {blog.likes}</span>
                          <span>💬 {blog.comments}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
      </div>
    </DashboardShell>
  );
}
