import { remark } from "remark";
import html from "remark-html";
import { getSupabase } from "./supabase";

export interface PostMeta {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tag: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    const { data, error } = await getSupabase()
      .from("posts")
      .select("id, slug, title, date, read_time, excerpt, tag")
      .order("created_at", { ascending: false });
    if (error) return [];
    return (data ?? []).map((p) => ({ ...p, readTime: p.read_time }));
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await getSupabase()
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error || !data) return null;
    const processed = await remark().use(html).process(data.content);
    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      date: data.date,
      readTime: data.read_time,
      excerpt: data.excerpt,
      tag: data.tag,
      contentHtml: processed.toString(),
    };
  } catch {
    return null;
  }
}
