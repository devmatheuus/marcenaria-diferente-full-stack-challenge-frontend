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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,

  //diminuir tamanho da legenda
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

const dataAPI = [
  {
    rocketName: "Falcon 9 Test Flight",
    successful: 176,
    failed: 19,
    launches: [
      {
        launchYear: 2018,
        launchCount: 20,
      },
      {
        launchYear: 2020,
        launchCount: 26,
      },
      {
        launchYear: 2013,
        launchCount: 3,
      },
      {
        launchYear: 2017,
        launchCount: 18,
      },
      {
        launchYear: 2021,
        launchCount: 31,
      },
      {
        launchYear: 2015,
        launchCount: 7,
      },
      {
        launchYear: 2014,
        launchCount: 6,
      },
      {
        launchYear: 2012,
        launchCount: 2,
      },
      {
        launchYear: 2010,
        launchCount: 2,
      },
      {
        launchYear: 2022,
        launchCount: 60,
      },
      {
        launchYear: 2016,
        launchCount: 9,
      },
      {
        launchYear: 2019,
        launchCount: 11,
      },
    ],
  },
  {
    rocketName: "Falcon Heavy Test Flight",
    successful: 3,
    failed: 2,
    launches: [
      {
        launchYear: 2018,
        launchCount: 1,
      },
      {
        launchYear: 2022,
        launchCount: 2,
      },
      {
        launchYear: 2019,
        launchCount: 2,
      },
    ],
  },
  {
    rocketName: "FalconSat",
    successful: 2,
    failed: 3,
    launches: [
      {
        launchYear: 2006,
        launchCount: 1,
      },
      {
        launchYear: 2009,
        launchCount: 1,
      },
      {
        launchYear: 2008,
        launchCount: 2,
      },
      {
        launchYear: 2007,
        launchCount: 1,
      },
    ],
  },
];

const yearsSet = new Set();

dataAPI.forEach((rocket) => {
  rocket.launches.forEach((launch) => {
    yearsSet.add(launch.launchYear);
  });
});

const yearsArray = Array.from(yearsSet).sort();

const data = {
  labels: yearsArray,
  datasets: dataAPI.map((rocket) => ({
    label: rocket.rocketName,
    data: yearsArray.map((year) => {
      const launch = rocket.launches.find(
        (launch) => launch.launchYear === year,
      );
      return launch ? launch.launchCount : 0;
    }),
    backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`,
  })),
};

const ChartOfLaunchesByYear: React.FC = () => {
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
