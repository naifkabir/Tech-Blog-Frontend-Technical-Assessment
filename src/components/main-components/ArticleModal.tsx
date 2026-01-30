"use client";

import { BlogPost } from "@/src/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export default function ArticleModal({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.photo_url,
    author: {
      "@type": "Person",
      name: "Tech Blog Author",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Blog",
    },
    datePublished: post.created_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://YOUR_DOMAIN.vercel.app",
    },
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        className={cn("max-h-[90vh] overflow-y-auto")}
        style={{ maxWidth: "70rem" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{post.title}</DialogTitle>

          <DialogDescription asChild>
            <time className="text-sm text-muted-foreground">
              {new Date(post.created_at).toLocaleDateString("en-IN", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </DialogDescription>
        </DialogHeader>

        <article
          className="prose prose-sm sm:prose mt-4 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />

        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: post.photo_url,
            author: {
              "@type": "Person",
              name: "Tech Blog Author",
            },
            publisher: {
              "@type": "Organization",
              name: "Tech Blog",
              logo: {
                "@type": "ImageObject",
                url: "https://YOUR_DOMAIN.vercel.app/logo.png",
              },
            },
            datePublished: post.created_at,
            dateModified: post.updated_at,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://YOUR_DOMAIN.vercel.app",
            },
          }),
        }}
      />
    </Dialog>
  );
}
