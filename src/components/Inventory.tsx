import { inventory } from "@/data/portfolio";
import { PixelIcon, SectionHead } from "./ui";

export function Inventory() {
  return (
    <section className="sec cave on-dark" id="inventory">
      <div className="wrap">
        <SectionHead kicker="LEVEL 2 · SKILLS" title="INVENTORY" sub="Tools I actually know how to swing. Handle with care." />
        <div className="inv">
          {inventory.map((group) => (
            <div key={group.title}>
              <h3 className="inv-label">
                <span>{group.title}</span>
                <span>{group.items.length} ITEMS</span>
              </h3>
              <ul className="slots">
                {group.items.map((item) => (
                  <li className="slot" key={item.name}>
                    <PixelIcon name={item.icon} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
