import BlogClient from "../components/main-components/BlogClient";
import Footer from "../components/main-components/Footer";
import Header from "../components/main-components/Header";
import Hero from "../components/main-components/Hero";
import LoadingSkeleton from "../components/main-components/LoadingSkeleton";
import { fetchPosts } from "../lib/fetchPosts";
import { BlogPost } from "../types/blog";

export default async function HomePage() {
  let posts: BlogPost[] = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="articles" className="mt-10 mb-20">
          {posts.length === 0 ? (
            <p className="text-center text-red-500">Failed to load posts.</p>
          ) : (
            <BlogClient posts={posts} />
          )}
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tech Blog",
            url: "https://YOUR_DOMAIN.vercel.app",
            description:
              "A modern tech blog featuring articles on React, Next.js, and frontend performance.",
            inLanguage: "en-US",
          }),
        }}
      />
    </>
  );
}
