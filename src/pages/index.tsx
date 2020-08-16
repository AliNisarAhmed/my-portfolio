import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import "../styles/styles.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
    </Layout>
  );
}
