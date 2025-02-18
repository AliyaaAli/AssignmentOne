"use client";
import Link from "next/link";

export default function Home() {
  return (
  <div className="container">
<h1>Welcome to the Hippo Web App!</h1>
<p>Explore fun facts, view hippo images, and test your knowledge with our quiz about hippos.</p>
<nav>
  <Link href="/HippoFacts">Hippo Facts</Link>
  <Link href="/HippoGallery">Hippo Gallery</Link>
  <Link href="/HippoQuiz">Hippo Quiz</Link>
</nav>
  </div>
  );
}
