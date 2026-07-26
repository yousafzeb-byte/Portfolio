"use client";

import { deletePost } from "./actions";

export default function DeleteButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <form
      action={deletePost}
      onSubmit={(e) => {
        if (!confirm(`Delete "${title}"?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors px-2 py-1"
      >
        Delete
      </button>
    </form>
  );
}
