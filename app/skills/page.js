import Tags from "@/components/Tags";
import { skillGroups } from "@/lib/content";

export const metadata = {
  title: "Skills",
  description:
    "Shahid Rasheed’s toolkit: Playwright, Selenium, Appium, API automation, BDD, CI, and manual testing.",
};

export default function SkillsPage() {
  return (
    <main className="wrap page">
      <header className="page-hero">
        <p className="eyebrow">03 / Toolkit</p>
        <h1>
          Tools I use to
          <br />
          keep a release honest<em>.</em>
        </h1>
        <p>
          The stack follows the product. Web UI, HTTP APIs, and mobile each get a framework, then a pipeline
          so the suite runs without a reminder.
        </p>
      </header>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="card skill-group" key={group.title}>
            <h2>{group.title}</h2>
            <p>{group.text}</p>
            <Tags items={group.items} />
          </article>
        ))}
      </div>

      <section className="ai-band">
        <div>
          <p className="eyebrow">AI-assisted automation</p>
          <h2>Cursor and Claude, with rules.</h2>
          <p>
            At VentureDive I used Cursor and Claude to draft tests faster, then kept the output consistent
            with custom Cursor rules, reusable skills, and templates for the frameworks.
          </p>
        </div>
        <ul>
          <li>Custom rules so generated tests match the framework, not a one-off script.</li>
          <li>Reusable skills and templates for page objects, API checks, and assertions.</li>
          <li>Faster debugging when a locator, payload, or pipeline step fails.</li>
        </ul>
      </section>
      <div style={{ height: 48 }} />
    </main>
  );
}
