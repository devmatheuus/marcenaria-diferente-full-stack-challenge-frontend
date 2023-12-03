import React from "react";
import GraphicsSection from "./components/GraphicsSection";
import Logo from "./components/Logo";

const Home: React.FC = () => {
  return (
    <>
      <Logo />
      <main>
        <GraphicsSection />
      </main>
    </>
  );
};

export default Home;
