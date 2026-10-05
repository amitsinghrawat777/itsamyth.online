import Image from "next/image";
import { covers } from "@/data/icons";
import { lockedQuest, quests, type Quest } from "@/data/portfolio";
import { linkProps, SectionHead } from "./ui";

const RANKS = { 1: "EASY", 2: "NORMAL", 3: "HARD", 4: "BOSS LEVEL" } as const;

function Cover({ quest }: { quest: Quest }) {
  return (
    <div className={`cover-art ${quest.theme}`}>
      {quest.image ? (
        <div className="cover-frame">
          <Image
            src={quest.image.src}
            alt={quest.image.alt}
            fill
            sizes="(max-width: 860px) 90vw, 520px"
            style={{ objectFit: "cover", objectPosition: quest.image.focus ?? "center" }}
          />
        </div>
      ) : (
        <svg className="cover-pixel" viewBox="0 0 24 24" aria-hidden="true">
          {covers[quest.art].map((layer, i) => (
            <path key={i} fill={layer.fill} d={layer.d} />
          ))}
        </svg>
      )}
      <span className={quest.status === "LIVE" ? "status live" : "status"}>
        {quest.status === "LIVE" && <i aria-hidden="true" />}
        {quest.status}
      </span>
    </div>
  );
}

export function Quests() {
  return (
    <section className="sec quests" id="quests">
      <div className="wrap">
        <SectionHead kicker="LEVEL 3 · PROJECTS" title="QUEST LOG" sub="Things I built. Some of them even worked on the first try." />
        <div className="qlist">
          {quests.map((quest, index) => (
            <article className="card quest" key={quest.title}>
              <Cover quest={quest} />
              <div className="q-body">
                <div className="q-top">
                  <span className="q-no">QUEST {String(index + 1).padStart(2, "0")}</span>
                  <span className="diff">
                    <span className="diff-rank">{RANKS[quest.difficulty]}</span>
                    <span className="pips" aria-hidden="true">
                      {[1, 2, 3, 4].map((n) => (
                        <i key={n} className={n <= quest.difficulty ? "pip on" : "pip"} />
                      ))}
                    </span>
                  </span>
                </div>
                <p className="q-kind">{quest.kind}</p>
                <h3 className="q-title">{quest.title}</h3>
                <p className="q-desc">{quest.description}</p>

                <p className="loot-h">LOOT DROPS</p>
                <dl className="drops">
                  {quest.loot.map((drop) => (
                    <div className="drop" key={drop.label}>
                      <dt>{drop.label}</dt>
                      <dd>{drop.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="chips">
                  {quest.stack.map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="btn-row">
                  {quest.actions.map((action) => (
                    <a key={action.label} className={action.primary ? "btn btn-sm" : "btn btn-sm btn-alt"} {...linkProps(action.href)}>
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {lockedQuest && (
            <div className="quest-locked">
              <span className="lock-q" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  {covers.mysteryCat.map((layer, i) => (
                    <path key={i} fill={layer.fill} d={layer.d} />
                  ))}
                </svg>
              </span>
              <div className="lock-text">
                <p className="q-no">QUEST {String(quests.length + 1).padStart(2, "0")} · LOCKED</p>
                <p className="lock-teaser">{lockedQuest.teaser}</p>
              </div>
              <div className="loading" aria-label="In development">
                <span className="loading-label">LOADING…</span>
                <span className="loading-bar" aria-hidden="true">
                  {Array.from({ length: 10 }, (_, i) => (
                    <i key={i} style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
