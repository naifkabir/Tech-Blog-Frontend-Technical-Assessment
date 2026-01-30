"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";
import { BlogPost } from "@/src/types/blog";
import { Input } from "../ui/input";
import { Field } from "@/src/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<BlogPost | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  const filtered = posts.filter((post) => {
    const text =
      `${post.title} ${post.description} ${post.content_text}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="px-6">
      <div className="flex flex-col gap-4 mb-6">
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Field orientation="horizontal">
            <Input
              aria-label="Search articles"
              className="h-11 rounded-sm"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Field>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full max-w-80 py-5.25">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat}
                    value={cat}
                    onSelect={() => setCategory(cat)}
                  >
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>

        <p>{filtered.length} results found</p>
      </div>

      {filtered.length === 0 && (
        <div className="flex justify-center items-center">
          <p className="font-bold bg-red-500 text-white w-fit px-5 py-1 rounded-full">
            No results found.
          </p>
        </div>
      )}

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <ArticleCard
            key={post.id}
            post={post}
            onClick={() => setSelected(post)}
          />
        ))}
      </div>

      {selected && (
        <ArticleModal post={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
