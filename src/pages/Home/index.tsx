import React from "react";
import GraphicsSection from "./components/GraphicsSection";
import LaunchesWrapper from "./components/LaunchesWrapper";

const Home: React.FC = () => {
  return (
    <main className="mx-auto mt-24 flex w-full max-w-[1400px] flex-col items-center px-4">
      <GraphicsSection />
      <LaunchesWrapper />
    </main>
  );
};

export default Home;
