import React from "react";
import GraphicsSection from "./components/GraphicsSection";
import LaunchesWrapper from "./components/LaunchesWrapper";
import Logo from "./components/Logo";

const Home: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center ">
      <Logo />
      <main className="flex w-full flex-col items-center  px-4">
        <GraphicsSection />
        <LaunchesWrapper />
      </main>
    </div>
  );
};

export default Home;
