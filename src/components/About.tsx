import Image from "next/image";
import { facts, profile, specialMoves, stats } from "@/data/portfolio";
import { SectionHead } from "./ui";

export function About() {
  const rows = [
    { label: "CLASS", text: profile.role },
    { label: "SPAWN POINT", text: profile.location },
    { label: "GUILD", text: profile.guild },
    ...facts,
  ];

  return (
    <section className="sec dirt on-dark" id="about">
      <div className="wrap">
        <SectionHead kicker="LEVEL 1 · ABOUT" title="CHARACTER SELECT" sub="You picked me. Bold move. Here are my stats." />

        <div className="select">
          {/* Left: the selected fighter */}
          <div className="fighter">
            <div className="fighter-stage">
              <span className="p1-tag">P1</span>
              <div className="fighter-frame">
                <Image
                  src={profile.avatar.src}
                  alt={profile.avatar.alt}
                  fill
                  priority
                  sizes="(max-width: 860px) 90vw, 440px"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                />
                <span className="corner tl" aria-hidden="true" />
                <span className="corner tr" aria-hidden="true" />
                <span className="corner bl" aria-hidden="true" />
                <span className="corner br" aria-hidden="true" />
              </div>
              <div className="fighter-plate">
                <span className="fighter-name">{profile.handle.toUpperCase()}</span>
                <span className="fighter-class">
                  {profile.name.toUpperCase()} · {profile.role.toUpperCase()}
                </span>
              </div>
            </div>
            <blockquote className="quote">
              <p>&ldquo;{profile.quote}&rdquo;</p>
            </blockquote>
            <p className="confirm" aria-hidden="true">
              PRESS A TO CONFIRM
            </p>
          </div>

          {/* Right: stats, bio and special moves */}
          <div className="fighter-info">
            <div className="card">
              <div className="card-head">
                <span>PLAYER CARD</span>
                <span>{profile.levelTag}</span>
              </div>
              <div className="pcard">
                <dl className="prows">
                  {rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.text}</dd>
                    </div>
                  ))}
                </dl>
                <p className="bio">{profile.lore}</p>
                <dl className="stats">
                  {stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd>
                        <span className="bar" role="img" aria-label={`${stat.value} out of 10`}>
                          {Array.from({ length: 10 }, (_, i) => (
                            <i key={i} className={i < stat.value ? `seg on ${stat.color}` : "seg"} />
                          ))}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="card">
              <div className="card-head blue">
                <span>SPECIAL MOVES</span>
                <span>P = PUNCH · K = KICK</span>
              </div>
              <ul className="moves">
                {specialMoves.map((move) => (
                  <li className="move" key={move.name}>
                    <div className="move-top">
                      <span className="move-name">{move.name}</span>
                      <span className="inputs" aria-label={`Input: ${move.input.join(" ")}`}>
                        {move.input.map((key, i) => (
                          <kbd key={i} className={key === "P" || key === "K" ? "key btn-key" : "key"}>
                            {key}
                          </kbd>
                        ))}
                      </span>
                    </div>
                    <p className="move-effect">{move.effect}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
