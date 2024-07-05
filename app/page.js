import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CRPG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="/week-2">Week 2</Link>
      </div>
      <div>
        <Link href="/week-3">Week 3</Link>
      </div>
    </main>
  );
}
