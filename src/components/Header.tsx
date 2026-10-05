import { links, navItems, profile } from "@/data/portfolio";

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
        </div>
      </header>
  );
}
