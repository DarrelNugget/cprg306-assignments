import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
      <h1 className="font-bold text-2xl">
        CRPG 306: Web Development 2 - Assignments
      </h1>
      <div className="hover:font-bold">
        <Link href="/week-2">Week 2</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-3">Week 3</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-4">Week 4</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-5">Week 5</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-6">Week 6</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-7">Week 7</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-8">Week 8</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="/week-10">Week 10</Link>
      </div>
      <div className="hover:font-bold">
        <Link href="https://github.com/DarrelNugget/PersonalPortfolio">Final Project: Github Link</Link>
      </div>
    </main>
  );
}
