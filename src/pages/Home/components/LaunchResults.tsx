import { Card } from "@/components/shadcn/ui";
import PieChart from "./PieChart";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import SuccessAndFailureLaunchesCount from "./SuccessAndFailureLaunchesCount";

const LaunchResults: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <Card.Card className="md-w-[50%] w-full rounded-md px-2 py-5 text-center shadow-lg">
      <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
        Resultado de Lançamento
      </Card.CardTitle>

      <Card.CardContent className="relative flex flex-col items-center justify-between px-2">
        {width >= 768 && (
          <div className="absolute flex w-full flex-row-reverse">
            <PieChart />
          </div>
        )}

        {width < 768 && (
          <div className="flex justify-between gap-5">
            <SuccessAndFailureLaunchesCount />
          </div>
        )}
      </Card.CardContent>
    </Card.Card>
  );
};

export default LaunchResults;
