import { highScores, profile } from "@/data/portfolio";
import { Arrow } from "./ui";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div aria-hidden="true">
        <div className="sun" />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="tag">PLAYER 1 HAS ENTERED THE CHAT</p>
          <h1 className="mega">
            {profile.nameLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="dialog">{profile.tagline}</p>
          <div className="btn-row">
            <a className="btn" href="#about">
              PRESS START <Arrow />
            </a>
            <a className="btn btn-alt" href="#quests">
              SEE MY QUESTS
            </a>
          </div>
        </div>
        <div className="scores">
          <h2 className="scores-h">HIGH SCORES</h2>
          <ol>
            {highScores.map((s) => (
              <li className="score" key={s.rank}>
                <span className="rank">{s.rank}</span>
                <div>
                  <b>{s.value}</b>
                  <span className="score-label">{s.label}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="coin">INSERT COIN TO HIRE</p>
        </div>
      </div>
      <div className="ground" aria-hidden="true">
        <div className="grass" />
        <div className="dirt" />
      </div>
    </section>
  );
}
