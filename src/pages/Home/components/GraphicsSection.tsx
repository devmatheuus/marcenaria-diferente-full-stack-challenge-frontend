import React from "react";
import ChartOfLaunchesByYear from "./ChartOfLaunchesByYear";
import LaunchResults from "./LaunchResults";

const GraphicsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 px-4">
      <LaunchResults />
      <ChartOfLaunchesByYear />
    </section>
  );
};

export default GraphicsSection;
