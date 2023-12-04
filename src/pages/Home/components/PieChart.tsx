import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import useLaunchesStats from "@/hooks/useLaunchStats";
import calculateTotalLaunches from "@/utils/calculateTotalLaunches";
import SuccessAndFailureLaunchesCount from "./SuccessAndFailureLaunchesCount";
import LAUNCHES_GRAPHIC_COLORS from "@/constants/launchesGraphicColors";

ChartJS.register(ArcElement);

const options = {
  responsive: true,
  cutout: 0,
  plugins: {
    legend: {
      display: false,
    },
  },
  //adicionar borda branca
  elements: {
    arc: {
      borderWidth: 2,
      borderColor: "#fff",
    },
  },
  animation: {
    animateScale: true,
  },
};

type PieLegendProps = {
  color: string;
  text: string;
};

const PieLegend: React.FC<PieLegendProps> = ({ color, text }) => {
  return (
    <div className="flex w-full items-center gap-1">
      <div style={{ background: color }} className="h-3 w-6" />
      <p className="text-medium w-40 text-left text-base text-gray-600 lg:w-full">
        {text}
      </p>
    </div>
  );
};

const PieChart: React.FC = () => {
  const { isLoading, launchesStats } = useLaunchesStats();

  if (isLoading) return <p>Carregando...</p>;

  const labels = launchesStats?.map((launch) => launch.rocketName);

  const [firstLaunchData, secondLaunchData, thirdLaunchData] = launchesStats!;

  const firstLaunchTotal = calculateTotalLaunches(firstLaunchData);
  const secondLaunchTotal = calculateTotalLaunches(secondLaunchData);
  const thirdLaunchTotal = calculateTotalLaunches(thirdLaunchData);

  const data = {
    labels,
    datasets: [
      {
        data: [firstLaunchTotal, secondLaunchTotal, thirdLaunchTotal],
        backgroundColor: LAUNCHES_GRAPHIC_COLORS,
      },
    ],
  };

  return (
    <div className="m-0 flex w-full max-w-[50%] justify-center">
      <div className="absolute left-1 flex flex-col gap-4 self-center sm:gap-2">
        {labels?.map((label, index) => (
          <PieLegend
            color={data.datasets[0].backgroundColor[index]}
            text={label}
            key={label}
          />
        ))}
        <div className="flex flex-col gap-2">
          <SuccessAndFailureLaunchesCount />
        </div>
      </div>

      <Doughnut options={options} data={data} className="w-full" />
    </div>
  );
};

export default PieChart;
