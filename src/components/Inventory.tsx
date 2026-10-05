"use client";

import { useState } from "react";
import { inventory, type Skill } from "@/data/portfolio";
import { PixelIcon, SectionHead } from "./ui";

const SLOTS_PER_ROW = 8;

function categoryName(title: string) {
  return title.split("·")[1]?.trim() ?? title;
}

export function Inventory() {
  const [selected, setSelected] = useState<{ skill: Skill; category: string }>({
    skill: inventory[0].items[0],
    category: categoryName(inventory[0].title),
  });
  const { skill, category } = selected;

  return (
    <section className="sec cave on-dark" id="inventory">
      <div className="wrap">
        <SectionHead
          kicker="LEVEL 2 · SKILLS"
          title="INVENTORY"
          sub="Tools I actually know how to swing. Click any slot to inspect it."
        />

        <div className="inv-layout">
          <div className="inv">
            {inventory.map((group) => {
              const empty = Math.max(0, SLOTS_PER_ROW - group.items.length);
              return (
                <div key={group.title}>
                  <h3 className="inv-label">
                    <span>{group.title}</span>
                    <span>
                      {group.items.length} / {SLOTS_PER_ROW}
                    </span>
                  </h3>
                  <ul className="slots">
                    {group.items.map((item) => {
                      const active = item.name === skill.name;
                      return (
                        <li key={item.name}>
                          <button
                            type="button"
                            className={active ? "slot active" : "slot"}
                            aria-pressed={active}
                            onClick={() => setSelected({ skill: item, category: categoryName(group.title) })}
                          >
                            {item.equipped && (
                              <span className="slot-e" aria-label="Equipped">
                                E
                              </span>
                            )}
                            <PixelIcon name={item.icon} />
                            <span className="slot-name">{item.name}</span>
                          </button>
                        </li>
                      );
                    })}
                    {Array.from({ length: empty }, (_, i) => (
                      <li key={`empty-${i}`} className="slot empty" aria-hidden="true" />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <aside className="item-info" aria-live="polite">
            <div className="ii-head">
              <span>ITEM INFO</span>
              <span className="ii-key">
                <i aria-hidden="true" /> E = EQUIPPED
              </span>
            </div>
            <div className="ii-body">
              <span className="ii-icon" key={skill.name}>
                <PixelIcon name={skill.icon} />
              </span>
              <div className="ii-title">
                <p className="ii-cat">{category}</p>
                <h3 className="ii-name">{skill.name}</h3>
                {skill.equipped && <span className="ii-equipped">EQUIPPED · MAIN STACK</span>}
              </div>
            </div>
            <p className="ii-blurb">{skill.blurb}</p>
            {skill.usedIn && (
              <p className="ii-used">
                <b>USED IN</b>
                {skill.usedIn.map((u) => (
                  <span key={u}>{u}</span>
                ))}
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
