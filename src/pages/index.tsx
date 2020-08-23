import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import "../styles/main.css";

export default function Home() {
  return (
    <Layout>
      <section className="h-full flex flex-col items-center justify-center">
        <Hero className="flex-1 flex flex-col items-center justify-end row-span-1 mb-20" />
        <Intro className="flex-1 grid grid-cols-2 p-6" />
      </section>
    </Layout>
  );
}
