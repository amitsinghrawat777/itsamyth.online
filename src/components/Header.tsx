import { links, navItems, profile } from "@/data/portfolio";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="logo" href="/#top">
          <span className="logo-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.handle.toUpperCase()}</span>
        </a>

        {/* Desktop: full link row */}
        <nav className="links" aria-label="Main">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="resume" href={links.resume} target="_blank" rel="noopener noreferrer">
            RESUME.EXE
          </a>
        </nav>

        {/* Phones: résumé + pause menu */}
        <div className="nav-mobile">
          <a className="resume-sm" href={links.resume} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
