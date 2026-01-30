import { ApiResponse } from "../types/blog";

export async function fetchPosts() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: ApiResponse = await res.json();
  return data.blogs;
}
