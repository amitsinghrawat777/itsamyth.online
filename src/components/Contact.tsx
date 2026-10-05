import type { IconName } from "@/data/icons";
import { links, profile } from "@/data/portfolio";
import { CopyEmail, LocalTime } from "./ContactWidgets";
import { Footer } from "./Footer";
import { linkProps, PixelIcon } from "./ui";

const stars = [
  { top: 60, left: "6%" },
  { top: 140, left: "18%" },
  { top: 90, left: "34%" },
  { top: 220, left: "52%" },
  { top: 50, left: "64%" },
  { top: 260, left: "80%" },
  { top: 330, left: "92%" },
  { top: 380, left: "4%" },
  { top: 470, left: "70%" },
  { top: 520, left: "40%" },
];

function hostAndPath(url: string) {
  const u = new URL(url);
  return `${u.hostname.replace(/^www\./, "")}${u.pathname.replace(/\/$/, "")}`;
}

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hey ${profile.handle}!`)}`;

  const party: { label: string; detail: string; href: string; icon: IconName }[] = [
    ...(links.github ? [{ label: "GITHUB", detail: hostAndPath(links.github), href: links.github, icon: "github" as const }] : []),
    { label: "LINKEDIN", detail: hostAndPath(links.linkedin), href: links.linkedin, icon: "linkedin" },
    { label: "WEBSITE", detail: hostAndPath(links.website), href: links.website, icon: "web" },
    { label: "RÉSUMÉ", detail: "PDF · 1 page", href: links.resume, icon: "resume" },
  ];

  return (
    <section className="night on-dark" id="contact">
      <div aria-hidden="true">
        {stars.map((s, i) => (
          <span key={i} className="star" style={{ top: s.top, left: s.left }} />
        ))}
        <div className="moon" />
      </div>

      <div className="wrap contact-in">
        <div className="contact-grid">
          {/* Left: the game-over screen */}
          <div>
            <p className="kicker pink">FINAL LEVEL · CONTACT</p>
            <h2 className="over">GAME OVER?</h2>
            <p className="contact-h">NAH. LET&apos;S BUILD SOMETHING.</p>
            <p className="sub">Got a project, a role or a really good meme? My inbox is open and I reply to everything.</p>

            <div className="continue">
              <span className="continue-label">CONTINUE?</span>
              <span className="countdown" aria-hidden="true">
                <span className="countdown-digits">
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </span>
              </span>
            </div>
            <div className="btn-row">
              <a className="btn" href={mailto}>
                YES · SAY HI
              </a>
              <a className="btn btn-alt" href="#top">
                NO · BACK TO START
              </a>
            </div>
          </div>

          {/* Right: message card + links */}
          <div className="card mailbox">
            <div className="card-head">
              <span>NEW MESSAGE</span>
              <span>1 UNREAD</span>
            </div>
            <div className="mailbox-body">
              <div className="mail-to">
                <PixelIcon name="mail" />
                <div>
                  <p className="mail-label">SEND IT TO</p>
                  <a className="mail-address" href={mailto}>
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="btn-row">
                <a className="btn" href={mailto}>
                  SEND EMAIL
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <h3 className="party-h">PARTY LINKS</h3>
              <ul className="party">
                {party.map((p) => (
                  <li key={p.label}>
                    <a
                      className="party-link"
                      {...(p.href.startsWith("http") ? linkProps(p.href) : { href: p.href, target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <PixelIcon name={p.icon} />
                      <span className="party-text">
                        <span className="party-label">{p.label}</span>
                        <span className="party-detail">{p.detail}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="status-bar">
          <span>
            <i className="dot" aria-hidden="true" /> SPAWN POINT: {profile.location.toUpperCase()}
          </span>
          <span>
            LOCAL TIME: <LocalTime timeZone={profile.timeZone} label={profile.timeZoneLabel} />
          </span>
        </p>
      </div>

      <div className="end" aria-hidden="true">
        <div className="grass" />
        <div className="dirt" />
      </div>
      <Footer />
    </section>
  );
}
