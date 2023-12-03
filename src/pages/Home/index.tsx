import React from "react";
import GraphicsSection from "./components/GraphicsSection";
import LaunchesWrapper from "./components/LaunchesWrapper";
import Logo from "./components/Logo";

const Home: React.FC = () => {
  return (
    <>
      <Logo />
      <main className="px-4">
        <GraphicsSection />
        <LaunchesWrapper />
      </main>
    </>
  );
};

export default Home;
