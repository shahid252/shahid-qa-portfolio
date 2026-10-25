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
          Four years of Experience
          <br />in test automation<em>.</em>
        </h1>
        <p>
            Developed and maintained scalable test automation frameworks across ride-hailing, recruitment, digital banking, and international payments. Performed manual test execution, functional and API testing, and regression testing before deployments to ensure application stability. Automated end-to-end test scenarios, integrated automated tests into CI/CD pipelines, and collaborated with cross-functional teams to identify defects, mitigate risks, and support reliable software releases.
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
