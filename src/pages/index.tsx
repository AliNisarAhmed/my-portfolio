import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import "../styles/main.css";

export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-1 grid-rows-2">
        <Hero className="self-center flex flex-col items-center row-span-1" />
        <Intro className="row-end-auto flex-1 border-2 border-blue-300 self-stretch grid grid-cols-2" />
      </section>
    </Layout>
  );
}
