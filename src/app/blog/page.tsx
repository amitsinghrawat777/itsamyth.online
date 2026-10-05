import type { Metadata } from "next";
import { EmptyLog, PostRow } from "@/components/BlogCards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHead } from "@/components/ui";
import { links, profile } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: `Patch Notes — ${profile.handle}`,
  description: `Dev logs by ${profile.handle} (${profile.name}): what I built, what broke, and what I learned fixing it.`,
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="site" id="top">
      <Header />
      <main className="sec blog blog-page">
        <div className="wrap">
          <a className="back-link" href="/#blog">
            ← BACK TO THE MAP
          </a>
          <SectionHead
            kicker="BONUS LEVEL · BLOG"
            title="ALL PATCH NOTES"
            sub={`${posts.length} log${posts.length === 1 ? "" : "s"} so far, newest first.`}
          />
          {posts.length === 0 ? (
            <EmptyLog links={[{ label: "FOLLOW ON LINKEDIN", href: links.linkedin }]} />
          ) : (
            <ul className="post-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <PostRow post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
