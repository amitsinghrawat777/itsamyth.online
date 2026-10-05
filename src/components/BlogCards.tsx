import Image from "next/image";
import { formatDate, type PostMeta } from "@/lib/blog";
import { Arrow } from "./ui";

function Badges({ post, latest }: { post: PostMeta; latest?: boolean }) {
  return (
    <span className="note-badges">
      <span className="q-no">PATCH {post.patch}</span>
      {latest && <span className="note-latest">LATEST</span>}
      {post.draft && <span className="note-draft">DRAFT · DEV ONLY</span>}
    </span>
  );
}

export function FeaturedPost({ post }: { post: PostMeta }) {
  const date = formatDate(post.date);
  return (
    <article className="card note-feat">
      <a className="note-cover" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
        {post.cover ? (
          <Image src={post.cover} alt="" fill sizes="(max-width: 860px) 90vw, 640px" style={{ objectFit: "cover" }} />
        ) : (
          <span className="note-version">{post.patch}</span>
        )}
      </a>
      <div className="note-body">
        <Badges post={post} latest />
        <h3 className="note-title">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h3>
        <p className="note-summary">{post.summary}</p>
        <p className="note-meta">
          {date.full} · {post.readMinutes} MIN READ
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
        <a className="btn btn-sm" href={`/blog/${post.slug}`}>
          READ PATCH NOTES <Arrow />
        </a>
      </div>
    </article>
  );
}

export function PostRow({ post }: { post: PostMeta }) {
  const date = formatDate(post.date);
  return (
    <a className="card post-row" href={`/blog/${post.slug}`}>
      <span className="cal" aria-hidden="true">
        <span className="cal-m">{date.month}</span>
        <span className="cal-d">{date.day}</span>
      </span>
      <span className="pr-text">
        <Badges post={post} />
        <span className="pr-title">{post.title}</span>
        <span className="pr-meta">
          {post.readMinutes} MIN READ{post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
        </span>
      </span>
      <Arrow />
    </a>
  );
}

export function EmptyLog({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="card log-empty">
      <div className="log-screen" aria-hidden="true">
        <p>&gt; LOADING DEV_LOG.EXE</p>
        <p>&gt; CHECKING SAVE FILES…</p>
        <p>
          &gt; 0 LOGS FOUND<span className="log-cursor" />
        </p>
        <span className="loading-bar">
          {Array.from({ length: 10 }, (_, i) => (
            <i key={i} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </span>
      </div>
      <div className="log-empty-body">
        <h3 className="note-title">NO SAVES YET</h3>
        <p className="note-summary">
          The first log is being written right now. Notes on edge rebuilds, Core Web Vitals fights and the bugs that
          broke me are on the way.
        </p>
        <div className="btn-row">
          {links.map((l) => (
            <a key={l.label} className="btn btn-sm btn-alt" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
