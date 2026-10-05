"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto button still works.
    }
  }

  return (
    <button type="button" className="btn btn-alt" onClick={copy}>
      <span aria-live="polite">{copied ? "COPIED!" : "COPY EMAIL"}</span>
    </button>
  );
}

// Renders after mount so the server-rendered HTML never disagrees with the visitor's clock.
export function LocalTime({ timeZone, label }: { timeZone: string; label: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-IN", { timeZone, hour: "numeric", minute: "2-digit", hour12: true });
    const tick = () => setNow(format.format(new Date()).toUpperCase());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span>
      {now ?? "--:--"} {label}
    </span>
  );
}
