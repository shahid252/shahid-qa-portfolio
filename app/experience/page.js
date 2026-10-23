import Tags from "@/components/Tags";
import { roles } from "@/lib/content";

export const metadata = {
  title: "Experience",
  description:
    "Shahid Rasheed’s SQA career at VentureDive, TPS Worldwide, Small World, HashPotato, and Qisstpay.",
};

export default function ExperiencePage() {
  return (
    <main className="wrap page">
      <header className="page-hero">
        <p className="eyebrow">01 / Experience</p>
        <h1>
          Four years inside
          <br />
          release cycles<em>.</em>
        </h1>
        <p>
          From an internship to automation frameworks for ride-hailing, hiring, digital banking, and
          international payments. The through-line is the same: find the risk, then automate the checks that
          should never be missed.
        </p>
      </header>
      <div>
        {roles.map((role) => (
          <article className="role-card" key={role.company}>
            <div>
              <p className="meta">{role.dates}</p>
              <p className="meta">{role.place}</p>
            </div>
            <div>
              <h2>{role.company}</h2>
              <p className="title">{role.title}</p>
              <p>{role.summary}</p>
              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Tags items={role.tags} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
