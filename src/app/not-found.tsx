import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container flex min-h-[65vh] flex-col items-center justify-center text-center">
      <p className="section-kicker">404 — Not found</p>
      <h1 className="section-title mt-3">This page could not be found.</h1>
      <p className="section-copy">The page may have moved or the project slug may be incorrect.</p>
      <Link className="btn btn-primary mt-6" href="/">Back to homepage</Link>
    </main>
  );
}
