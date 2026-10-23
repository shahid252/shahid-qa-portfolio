import Tags from "@/components/Tags";
import { clientProjects, openSource, profile } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Client automation for Savoya, Dawlati, TPS digital banking, and Omnex, plus open-source QA frameworks.",
};

function Highlights({ items }) {
  return (
    <div className="split">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="wrap page">
      <header className="page-hero">
        <p className="eyebrow">02 / Selected work</p>
        <h1>
          Platforms, then the
          <br />
          frameworks behind them<em>.</em>
        </h1>
        <p>
          Client work is under NDA, so these cards describe the testing and the stack. Public repositories
          are linked below.
        </p>
      </header>

      <p className="group-label">Client engagements</p>
      <div className="project-grid">
        {clientProjects.map((project) => (
          <article
            className={project.number === "01" ? "card feature" : "card"}
            key={project.name}
          >
            <p className="kicker">
              {project.number} · {project.kicker}
            </p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <Highlights items={project.highlights} />
            <Tags items={project.tags} />
          </article>
        ))}
      </div>

      <p className="group-label">Open source</p>
      <div className="project-grid">
        {openSource.map((project) => (
          <article className="card" key={project.name} style={{ display: "flex", flexDirection: "column" }}>
            <p className="kicker">
              {project.number} · {project.kicker}
            </p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <Tags items={project.tags} />
            <a className="repo" href={project.url} target="_blank" rel="noreferrer">
              View repository ↗
            </a>
          </article>
        ))}
      </div>

      <div className="actions" style={{ margin: "36px 0 48px" }}>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          All repositories ↗
        </a>
      </div>
    </main>
  );
}
