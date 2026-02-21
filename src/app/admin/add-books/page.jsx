export default function AdminBooksPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-slate-50">
              Manage Books
            </h1>
            <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500">
              Add new book
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            This section will show a table of all books with actions to add,
            edit, and delete. For now it is a premium-styled placeholder wired
            to the admin sidebar.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
            Table placeholder: ID, Title, Author, Genre, Status, Actions.
          </div>
        </section>
      </main>
    </div>
  );
}

