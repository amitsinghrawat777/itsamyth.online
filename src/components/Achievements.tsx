import { jobs, profile, trophies, type TrophyIcon } from "@/data/portfolio";
import { SectionHead } from "./ui";

// 16×16 pixel trophies, one layer per colour.
const TROPHY_ART: Record<TrophyIcon, { fill: string; d: string }[]> = {
  trophy: [
    { fill: "#ffd23f", d: "M3 2h10v1H3z M4 3h8v5H4z M1 3h3v1H1z M1 4h1v2H1z M2 6h2v1H2z M12 3h3v1h-3z M14 4h1v2h-1z M12 6h2v1h-2z M5 8h6v1H5z M6 9h4v1H6z M7 10h2v2H7z" },
    { fill: "#e0a800", d: "M10 3h2v5h-2z M9 8h2v1H9z" },
    { fill: "#fff8e1", d: "M5 4h1v2H5z" },
    { fill: "#8b5a2b", d: "M5 12h6v1H5z M4 13h8v1H4z" },
  ],
  medal: [
    { fill: "#ff4fa3", d: "M4 1h3v5H4z" },
    { fill: "#4f8bff", d: "M9 1h3v5H9z" },
    { fill: "#ffd23f", d: "M6 6h4v1H6z M5 7h6v1H5z M4 8h8v4H4z M5 12h6v1H5z M6 13h4v1H6z" },
    { fill: "#e0a800", d: "M7 9h2v2H7z" },
  ],
  cap: [
    { fill: "#14121f", d: "M7 2h2v1H7z M4 3h8v1H4z M1 4h14v2H1z M4 6h8v4H4z" },
    { fill: "#6f5bb0", d: "M4 3h8v1H4z M2 4h12v1H2z" },
    { fill: "#ffd23f", d: "M14 5h1v5h-1z M13 10h3v2h-3z" },
  ],
  scroll: [
    { fill: "#fff8e1", d: "M3 2h10v12H3z" },
    { fill: "#8a84a3", d: "M5 4h6v1H5z M5 6h6v1H5z M5 8h4v1H5z" },
    { fill: "#ff4fa3", d: "M9 10h3v3H9z" },
  ],
  book: [
    { fill: "#4fc3ff", d: "M2 3h5v10H2z M9 3h5v10H9z" },
    { fill: "#14121f", d: "M7 3h2v11H7z" },
    { fill: "#fff8e1", d: "M3 5h3v1H3z M3 7h3v1H3z M10 5h3v1h-3z M10 7h3v1h-3z" },
  ],
};

function PixelArt({ layers }: { layers: { fill: string; d: string }[] }) {
  return (
    <svg className="trophy-ico" viewBox="0 0 16 16" aria-hidden="true">
      {layers.map((l, i) => (
        <path key={i} fill={l.fill} d={l.d} />
      ))}
    </svg>
  );
}

function Check() {
  return (
    <svg className="obj-mark" viewBox="0 0 8 8" aria-hidden="true">
      <path d="M6 1h2v2H6z M5 3h2v1H5z M4 4h2v1H4z M1 4h2v1H1z M2 5h3v1H2z M3 6h1v1H3z" />
    </svg>
  );
}

export function Achievements() {
  const timeline = [...jobs].sort((a, b) => b.world - a.world);

  return (
    <section className="sec xp on-dark" id="xp">
      <div className="wrap">
        <SectionHead
          kicker="LEVEL 4 · EXPERIENCE"
          kickerTone="gold"
          title="CAREER MODE"
          sub="Every save point so far. The current level is still being played."
        />

        <ol className="worlds">
          {timeline.map((job) => (
            <li className={job.current ? "world current" : "world"} key={job.company}>
              <span className="world-node" aria-hidden="true">
                W{job.world}
              </span>
              <article className="world-card">
                <header className="world-top">
                  <span className="world-tag">
                    {job.current && <i aria-hidden="true" />}
                    WORLD {job.world} · {job.current ? "NOW PLAYING" : "CLEARED"}
                  </span>
                  <span className="world-when">
                    {job.period} · {job.mode}
                  </span>
                </header>
                <h3 className="world-role">{job.role}</h3>
                <p className="world-co">@ {job.company}</p>
                <p className="world-sum">{job.summary}</p>

                <p className="obj-h">{job.current ? "ACTIVE OBJECTIVES" : "OBJECTIVES COMPLETE"}</p>
                <ul className="objectives">
                  {job.objectives.map((o) => (
                    <li key={o}>
                      {job.current ? <span className="obj-live" aria-hidden="true" /> : <Check />}
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                {(job.stats || job.stack) && (
                  <div className="world-foot">
                    {job.stats && (
                      <dl className="world-stats">
                        {job.stats.map((s) => (
                          <div key={s.label}>
                            <dt>{s.label}</dt>
                            <dd>{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {job.stack && (
                      <ul className="chips dark">
                        {job.stack.map((t) => (
                          <li className="chip" key={t}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            </li>
          ))}
          <li className="world world-spawn" aria-hidden="true">
            <span className="world-node">GO</span>
            <span className="start-label">PRESS START · SPAWNED IN {profile.location.split(",")[0].toUpperCase()}</span>
          </li>
        </ol>

        <h3 className="case-h">
          TROPHY CASE <span>{trophies.length} ITEMS</span>
        </h3>
        <ul className="trophies">
          {trophies.map((t) => (
            <li className={`trophy r-${t.rarity.toLowerCase().replace(" ", "-")}`} key={t.title}>
              <span className="trophy-art">
                <PixelArt layers={TROPHY_ART[t.icon]} />
              </span>
              <div>
                <span className="rarity">{t.rarity}</span>
                <h4 className="trophy-title">{t.title}</h4>
                <p className="trophy-issuer">{t.issuer}</p>
                <p className="trophy-detail">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
