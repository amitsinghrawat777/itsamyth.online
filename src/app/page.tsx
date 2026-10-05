import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { GitHubStats } from "@/components/GitHubStats";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Inventory } from "@/components/Inventory";
import { Quests } from "@/components/Quests";

// Rebuild the page at most once an hour so the GitHub stats stay fresh.
export const revalidate = 3600;

export default function Home() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <div className="dith d1" aria-hidden="true" />
        <Inventory />
        <div className="dith d2" aria-hidden="true" />
        <Quests />
        <GitHubStats />
        <Achievements />
        <div className="dith d4" aria-hidden="true" />
        <Blog />
        <div className="dith d5" aria-hidden="true" />
        <Contact />
      </main>
    </div>
  );
}
