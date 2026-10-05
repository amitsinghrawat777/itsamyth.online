import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/data/portfolio";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${profile.handle}`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.summary, type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const date = formatDate(post.date);

  return (
    <div className="site" id="top">
      <Header />
      <main className="sec blog blog-page">
        <div className="wrap">
          <a className="back-link" href="/blog">
            ← ALL PATCH NOTES
          </a>
          <article className="card post-article">
            <header className="post-head">
              <p className="note-badges">
                <span className="q-no">PATCH {post.patch}</span>
                {post.draft && <span className="note-draft">DRAFT · DEV ONLY</span>}
              </p>
              <h1 className="post-h1">{post.title}</h1>
              <p className="note-meta">
                <time dateTime={post.date}>{date.full}</time> · {post.readMinutes} MIN READ · BY {profile.handle.toUpperCase()}
              </p>
              {post.tags.length > 0 && (
                <ul className="chips">
                  {post.tags.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </header>
            {post.cover && (
              <div className="post-cover">
                <Image src={post.cover} alt="" fill sizes="(max-width: 860px) 90vw, 820px" style={{ objectFit: "cover" }} />
              </div>
            )}
            {/* Posts are our own Markdown files from /content/blog, so rendering their HTML is safe. */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer className="post-end">
              <span className="post-end-label">END OF LOG · {post.patch}</span>
              <div className="btn-row">
                <a className="btn btn-sm btn-alt" href="/blog">
                  MORE LOGS
                </a>
                <a className="btn btn-sm" href="/#contact">
                  SAY HI
                </a>
              </div>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
