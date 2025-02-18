"use client";
import Link from "next/link";
import { useState } from "react";

function HippoFacts() {
  const facts = [
    "Hippos can hold their breath for up to 5 minutes.",
    "Despite their size, hippos can run up to 30 km/h.",
    "Hippos produce their own sunscreen!",
    "Hippos like watermelons.",
  ];
  const [index, setIndex] = useState(0);
  
  return (
    <div className="container">
      <h2>Hippo Facts</h2>
      <p>{facts[index]}</p>
      <button onClick={() => setIndex((index + 1) % facts.length)}>Next Fact</button>
      <br></br>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default HippoFacts;
