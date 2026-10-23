import Link from "next/link";
import { profile, stats, tools, clientProjects } from "@/lib/content";

export default function HomePage() {
  const loop = [...tools, ...tools];
  const featured = clientProjects.slice(0, 3);

  return (
    <main>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">Hello, welcome to my portfolio</p>
          <h1>
            {profile.first}
            <br />
            <em>{profile.last}</em>
            <span className="dot">.</span>
          </h1>
          <p className="role">{profile.role}</p>
          <p className="lede">{profile.summary}</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/projects">
              Explore my projects ↗
            </Link>
            <Link className="btn btn-ghost" href="/about#contact">
              Contact me
            </Link>
          </div>
          <div className="text-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.resume} download>
              Résumé ↗
            </a>
          </div>
        </div>

        <aside className="console" aria-label="Portrait and recent work">
          <div className="portrait-frame">
            <img src="/portrait.jpg?v=6" alt="Shahid Rasheed" />
          </div>
          <p className="portrait-caption">Karachi · SQA Automation</p>
          <ul className="checks">
            <li className="check">
              <span className="mark">✓</span>
              <span>
                <b>Savoya</b>
                Playwright POM and a Mocha API suite
              </span>
            </li>
            <li className="check">
              <span className="mark">✓</span>
              <span>
                <b>Dawlati</b>
                Appium for the jobseeker app, Android and iOS
              </span>
            </li>
            <li className="check">
              <span className="mark">✓</span>
              <span>
                <b>TPS banking</b>
                Selenium C#, RestSharp, and Appium
              </span>
            </li>
          </ul>
        </aside>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((tool, index) => (
            <span key={`${tool}-${index}`}>{tool}</span>
          ))}
        </div>
      </div>

      <section className="wrap stats" aria-label="Highlights">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected platforms</p>
            <h2>
              Quality on products
              <br />
              people actually use<em>.</em>
            </h2>
          </div>
          <p>
            Ride-hailing, hiring, and digital banking. Each one has a framework, not a pile of scripts.
          </p>
        </div>
        <div className="preview-grid">
          {featured.map((project) => (
            <Link className="card" href="/projects" key={project.name}>
              <p className="kicker">
                {project.number} · {project.kicker}
              </p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <span className="more">View the work ↗</span>
            </Link>
          ))}
          <Link className="card" href="/experience">
            <p className="kicker">Also on the record</p>
            <h3>Fintech & early SQA</h3>
            <p>
              Omnex at Small World, performance testing at HashPotato, and a testing internship at Qisstpay.
            </p>
            <span className="more">See experience ↗</span>
          </Link>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <p className="eyebrow">Explore the work</p>
        <div className="explore-grid">
          <Link className="explore-card" href="/experience">
            <span>01 / Career</span>
            <strong>Experience ↗</strong>
          </Link>
          <Link className="explore-card" href="/projects">
            <span>02 / Selected work</span>
            <strong>Projects ↗</strong>
          </Link>
          <Link className="explore-card" href="/skills">
            <span>03 / Toolkit</span>
            <strong>Skills ↗</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}
