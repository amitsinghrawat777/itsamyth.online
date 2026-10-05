import { icons, type IconName } from "@/data/icons";

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 4 7" aria-hidden="true">
      <path d="M0 0h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1z" />
    </svg>
  );
}

export function PixelIcon({ name }: { name: IconName }) {
  return (
    <svg className="ico" viewBox="0 0 16 16" aria-hidden="true">
      {icons[name].map((layer, i) => (
        <path key={i} fill={layer.fill} d={layer.d} />
      ))}
    </svg>
  );
}

// Opens off-site links in a new tab; keeps in-page anchors and local files in place.
export function linkProps(href: string) {
  return href.startsWith("http") ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
}

export function SectionHead({
  kicker,
  title,
  sub,
  kickerTone,
}: {
  kicker: string;
  title: string;
  sub: string;
  kickerTone?: "gold" | "pink";
}) {
  return (
    <div className="sec-head">
      <p className={kickerTone ? `kicker ${kickerTone}` : "kicker"}>{kicker}</p>
      <h2 className="h2">{title}</h2>
      <p className="sub">{sub}</p>
    </div>
  );
}
