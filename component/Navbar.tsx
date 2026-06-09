import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>Athora</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
        <Link href="/athletes">Athletes</Link>
        <Link href="/rankings">Rankings</Link>
        <Link href="/events">Events</Link>
      </div>
    </nav>
  );
}
