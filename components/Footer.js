import Link from "next/link";
import { nav, profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="logo" href="/">
            SR<span>.</span>
          </Link>
          <p className="fine">Frameworks for web, API, and mobile. Built to run in CI.</p>
        </div>
        <div className="footer-links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
