"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./ui";

type Item = { label: string; href: string };

// Phone navigation: a game-style "PAUSED" menu instead of a wrapped list of links.
export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="pause-menu"
        onClick={() => setOpen(true)}
      >
        <span className="burger" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        MENU
      </button>

      {open && (
        <div className="pause" id="pause-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="pause-panel">
            <p className="pause-title">PAUSED</p>
            <ul className="pause-list">
              {items.map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    <Arrow />
                    <span className="pause-no">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn pause-close" onClick={() => setOpen(false)} autoFocus>
              CONTINUE ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}
