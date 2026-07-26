import { getAllPosts } from "@/lib/posts";
import BlogList from "./BlogList";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
          Writing
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Blog</h2>
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
