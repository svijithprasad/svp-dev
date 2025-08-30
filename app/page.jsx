"use client";

import { useEffect, useState } from "react";

import Navbar from "./_components/Navbar";
import Loader from './_components/Loader'
import Hero from './_components/Hero'
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ProgressiveBlur from "@/components/magicui/progressive-blur";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isLoaded(!loaded);
    }, 4800)
  }, [])

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <main className="min-h-screen bg-[#0E100F] text-[#FFFFE3]">
        <Navbar />
        {loaded && <Hero />}
      </main>
      <SmoothCursor />

    </>
  );
}
