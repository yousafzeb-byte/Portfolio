import { getPost, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-md">
            {post.tag}
          </span>
          <span className="text-xs text-slate-400">
            {post.date} &middot; {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-12">
          {post.title}
        </h1>

        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-code:text-indigo-700 prose-code:bg-indigo-50 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    </div>
  );
}
