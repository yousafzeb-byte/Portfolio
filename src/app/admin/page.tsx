import { cookies } from "next/headers";
import { login, logout, createPost } from "./actions";
import { getAllPosts } from "@/lib/posts";
import DeleteButton from "./DeleteButton";

const TAGS = ["Engineering", "Career", "Project", "Tutorial", "Personal"];

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; msg?: string }>;
}) {
  const { error, msg } = await searchParams;
  const store = await cookies();
  const isLoggedIn =
    store.get("admin_session")?.value === process.env.ADMIN_PASSWORD;

  // ── Login ────────────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 w-full max-w-sm">
          <p className="text-indigo-600 font-semibold text-xs tracking-widest uppercase mb-1">
            Portfolio
          </p>
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Blog Admin</h1>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 mb-4">
              {error}
            </p>
          )}
          <form action={login}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoFocus
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm mb-4 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ────────────────────────────────────────────────────────────────
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-slate-900">Blog Admin</span>
            <span className="text-xs text-slate-400">
              {posts.length} post{posts.length !== 1 ? "s" : ""}
            </span>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm text-slate-500 hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        {/* Flash messages */}
        {msg && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
            {msg}
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        {/* New Post Form */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-bold text-slate-900 mb-5">New Post</h2>
          <form action={createPost} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Title
              </label>
              <input
                name="title"
                required
                placeholder="What did you write about?"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Tag
              </label>
              <select
                name="tag"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white"
              >
                {TAGS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Excerpt{" "}
                <span className="text-slate-400 normal-case font-normal">
                  (shown on the card)
                </span>
              </label>
              <textarea
                name="excerpt"
                required
                rows={2}
                placeholder="One or two sentences summarising the post."
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Content{" "}
                <span className="text-slate-400 normal-case font-normal">
                  (Markdown supported — ## headings, **bold**, `code`, - lists)
                </span>
              </label>
              <textarea
                name="content"
                required
                rows={18}
                placeholder={`## Introduction\n\nWrite your post here...\n\n## Key Points\n\n- Point one\n- Point two\n\n\`\`\`python\n# Code blocks work too\nprint("Hello")\n\`\`\``}
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-mono outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Publish Post
            </button>
          </form>
        </section>

        {/* Published Posts */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-bold text-slate-900 mb-5">
            Published Posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-sm text-slate-400">
              No posts yet. Write your first one above.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="flex items-center justify-between py-3.5 gap-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {post.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {post.date} &middot; {post.tag} &middot; {post.readTime}
                    </p>
                  </div>
                  <DeleteButton id={post.id} title={post.title} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
