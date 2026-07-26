"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const INITIAL_COUNT = 2;

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {shown.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
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
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + 2)}
            className="px-6 py-2.5 text-sm font-semibold border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
