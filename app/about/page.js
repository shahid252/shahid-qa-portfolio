import { certifications, education, profile } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "About Shahid Rasheed, SQA Automation Engineer in Karachi. Education, certifications, and contact.",
};

export default function AboutPage() {
  return (
    <main className="wrap page">
      <header className="page-hero">
        <p className="eyebrow">04 / About</p>
        <h1>
          Curious about failures.
          <br />
          <em>Serious about frameworks.</em>
        </h1>
      </header>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m {profile.name}, an {profile.role} based in {profile.location}. For the last four years I
            have tested products where a wrong number or a broken journey is expensive: transfers, wallet
            flows, ride-hailing, and hiring.
          </p>
          <p>
            I still write and run manual cases. That is how I learn what the automation should protect.
            From there I build UI, API, and mobile frameworks — Playwright, Selenium, Mocha, RestSharp,
            Appium — and connect them to Jenkins, GitHub Actions, or Bitbucket so the suite runs on a
            schedule, not on memory.
          </p>
          <p>
            I started with a two-month SQA boot camp at Contour, then an internship at Qisstpay. The work
            since then has been inside product teams, pairing with developers when an integration fails and
            leaving them a test that fails the same way next time.
          </p>
        </div>
        <div className="about-side">
          <img className="about-photo" src="/portrait.jpg?v=6" alt="Shahid Rasheed" />
          <dl className="fact">
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
            <dt>Focus</dt>
            <dd>UI, API, and mobile automation</dd>
            <dt>Domains</dt>
            <dd>Fintech, digital banking, ride-hailing, hiring</dd>
            <dt>Open to</dt>
            <dd>SQA automation roles, remote or Karachi</dd>
          </dl>
        </div>
      </div>

      <p className="group-label">Education</p>
      <div className="edu">
        {education.map((item) => (
          <article key={item.school}>
            <span className="year">{item.year}</span>
            <div>
              <h3>{item.program}</h3>
              <p>
                {item.school}
                {item.detail ? ` · ${item.detail}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="group-label">Certifications</p>
      <div className="certs">
        {certifications.map((item) => (
          <article className="cert" key={item.name}>
            <span className="year">{item.year}</span>
            <div>
              <strong>{item.name}</strong>
              <span>{item.by}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>
          If a release needs
          <br />
          a framework, <em>write to me.</em>
        </h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <small>Email</small>
            <strong>{profile.email}</strong>
          </a>
          <a href={profile.phoneHref}>
            <small>Phone</small>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <small>LinkedIn</small>
            <strong>shahidrasheed252 ↗</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <small>GitHub</small>
            <strong>shahid252 ↗</strong>
          </a>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me ↗
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download résumé
          </a>
        </div>
      </section>
      <div style={{ height: 36 }} />
    </main>
  );
}
