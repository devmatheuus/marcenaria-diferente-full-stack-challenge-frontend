import { Card } from "@/components/shadcn/ui";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useLaunchesStats from "@/hooks/useLaunchStats";
import LAUNCHES_GRAPHIC_COLORS from "@/constants/launchesGraphicColors";
import Loader from "@/components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 8,
        },
      },
    },
    y: {
      stacked: true,
      ticks: {
        font: {
          size: 8,
        },
      },
    },
  },
};

const ChartOfLaunchesByYear: React.FC = () => {
  const { launchesStats, isLoading, isError } = useLaunchesStats();

  if (isLoading || isError) {
    return (
      <Card.Card className="md-w-[50%] w-full justify-center rounded-md px-2 py-5 text-center shadow-lg">
        <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
          Lançamentos por ano
        </Card.CardTitle>
        <Loader />
      </Card.Card>
    );
  }

  const yearsSet = new Set<number>();

  launchesStats?.forEach((rocket) => {
    rocket.launches.forEach((launch) => {
      yearsSet.add(launch.launchYear);
    });
  });

  const yearsArray = Array.from(yearsSet).sort();

  const data = {
    labels: yearsArray,
    datasets: launchesStats!.map((rocket, i) => ({
      label: rocket.rocketName,
      data: yearsArray.map((year) => {
        const launch = rocket.launches.find(
          (launch) => launch.launchYear === year,
        );
        return launch ? launch.launchCount : 0;
      }),
      backgroundColor: LAUNCHES_GRAPHIC_COLORS[i],
    })),
  };

  return (
    <Card.Card className="md-w-[50%] w-full rounded-md px-2 py-5 text-center shadow-lg">
      <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
        Lançamentos por ano
      </Card.CardTitle>

      <Bar options={options} data={data} className="w-full max-w-[100%]" />
    </Card.Card>
  );
};
export default ChartOfLaunchesByYear;
