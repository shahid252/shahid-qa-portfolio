import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap page not-found">
      <p className="eyebrow">404</p>
      <h1 className="role" style={{ fontSize: "64px", marginTop: 0 }}>
        This page is not in the suite.
      </h1>
      <p className="lede">The link may be old. The rest of the portfolio is still here.</p>
      <div className="actions">
        <Link className="btn btn-primary" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
