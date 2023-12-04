import React from "react";
import ChartOfLaunchesByYear from "./ChartOfLaunchesByYear";
import LaunchResults from "./LaunchResults";

const GraphicsSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-10 md:flex-row">
      <LaunchResults />
      <ChartOfLaunchesByYear />
    </section>
  );
};

export default GraphicsSection;
