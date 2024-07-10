import React from "react";
import Hero from "../components/containers/Hero";
import Time from "../components/containers/Time";
import Power from "../components/containers/Power";
import ConsCarousel from "@components/ConsCarousel";
import ProsCarousel from "@components/ProsCarousel";

export default function Home() {
  return (
    <main className="primary-color h-full">
      <Hero />
      {/* <Time /> */}
      <ProsCarousel />
      <ConsCarousel />
      {/* <Demo /> */}
      <Power />
    </main>
  );
}
