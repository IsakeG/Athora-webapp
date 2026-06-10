import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>404</h1>

      <p>Page not found.</p>

      <Link href="/">
        Return Home
      </Link>
    </main>
  );
}
