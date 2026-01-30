import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide">
          Welcome to TechBlog
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Elevate Your Frontend Skills with In-Depth Articles
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Explore tutorials, tips, and insights on React, Next.js, Tailwind CSS,
          and more.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#articles"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Browse Articles
          </Link>

          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Built with Next.js
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
