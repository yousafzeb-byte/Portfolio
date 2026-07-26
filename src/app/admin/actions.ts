"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase";

// ── Auth ──────────────────────────────────────────────────────────────────────

export async function login(formData: FormData) {
  const password = formData.get("password") as string;
  if (password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin?error=Wrong+password");
  }
  const store = await cookies();
  store.set("admin_session", process.env.ADMIN_PASSWORD!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    sameSite: "lax",
  });
  redirect("/admin");
}

export async function logout() {
  const store = await cookies();
  store.delete("admin_session");
  redirect("/admin");
}

// ── Guard ─────────────────────────────────────────────────────────────────────

async function requireAdmin() {
  const store = await cookies();
  if (store.get("admin_session")?.value !== process.env.ADMIN_PASSWORD) {
    redirect("/admin");
  }
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export async function createPost(formData: FormData) {
  await requireAdmin();

  const title = (formData.get("title") as string).trim();
  const tag = (formData.get("tag") as string).trim();
  const excerpt = (formData.get("excerpt") as string).trim();
  const content = (formData.get("content") as string).trim();

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const words = content.split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

  const { error } = await getSupabaseAdmin().from("posts").insert({
    slug,
    title,
    tag,
    excerpt,
    content,
    date,
    read_time: readTime,
  });

  if (error) {
    redirect(`/admin?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/");
  redirect("/admin?msg=Post+published");
}

export async function deletePost(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;
  const { error } = await getSupabaseAdmin()
    .from("posts")
    .delete()
    .eq("id", id);

  if (error) {
    redirect(`/admin?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/");
  redirect("/admin?msg=Post+deleted");
}
