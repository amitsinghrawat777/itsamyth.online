import { links } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";
import { EmptyLog, FeaturedPost, PostRow } from "./BlogCards";
import { SectionHead } from "./ui";

export function Blog() {
  const [latest, ...older] = getAllPosts();
  const follow = [
    { label: "FOLLOW ON LINKEDIN", href: links.linkedin },
    ...(links.github ? [{ label: "GITHUB", href: links.github }] : []),
  ];

  return (
    <section className="sec blog" id="blog">
      <div className="wrap">
        <SectionHead
          kicker="BONUS LEVEL · BLOG"
          title="PATCH NOTES"
          sub="Dev logs from the trenches: what I built, what broke, and what I learned fixing it at 3AM."
        />
        {!latest ? (
          <EmptyLog links={follow} />
        ) : (
          <div className="notes">
            <FeaturedPost post={latest} />
            <div className="note-side">
              <h3 className="note-side-h">PREVIOUS PATCHES</h3>
              {older.length > 0 ? (
                <ul className="post-list">
                  {older.slice(0, 3).map((post) => (
                    <li key={post.slug}>
                      <PostRow post={post} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="note-none">Older logs land here as I write them. This is patch {latest.patch}, so it&apos;s early days.</p>
              )}
              <a className="btn btn-alt" href="/blog">
                ALL LOGS
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
