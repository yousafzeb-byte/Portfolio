const posts = [
  {
    title: "From AI Dependency to Engineering Depth",
    date: "July 2026",
    readTime: "5 min read",
    excerpt:
      "How I rebuilt my fundamentals after months of over-relying on AI coding tools — and what I learned about what actually makes a good engineer.",
    tag: "Career",
    href: "#",
  },
  {
    title: "Building a Production-Ready FastAPI App",
    date: "June 2026",
    readTime: "8 min read",
    excerpt:
      "A walkthrough of how I structure FastAPI apps with dependency injection, SQLAlchemy models, Alembic migrations, and 40+ automated tests.",
    tag: "Engineering",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
          Writing
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Blog</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group block bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-md">
                  {post.tag}
                </span>
                <span className="text-xs text-slate-400">
                  {post.date} &middot; {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
