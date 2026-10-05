import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="foot">
      <span>
        © {new Date().getFullYear()} {profile.handle.toUpperCase()} · {profile.name.toUpperCase()}
      </span>
      <span>BUILT PIXEL BY PIXEL IN {profile.location.split(",")[0].toUpperCase()}</span>
      <a href="#top">BACK TO TOP ^</a>
    </footer>
  );
}
