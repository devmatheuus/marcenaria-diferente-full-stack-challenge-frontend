import { Card } from "@/components/shadcn/ui";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const LaunchResults: React.FC = () => {
  const successCount = 70;
  const failureCount = 30;

  return (
    <Card.Card className="md-w-[50%] w-full rounded-md px-2 py-5 text-center shadow-lg">
      <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
        Resultado de Lançamento
      </Card.CardTitle>

      <Card.CardContent className="flex items-center justify-between">
        <div className="flex items-center">
          <FaCheck className="text-xl text-green-500" />
          <p className="text-base font-medium uppercase text-gray-500">
            Sucesso: {successCount}
          </p>
        </div>

        <div className="flex items-center ">
          <FaTimes className="text-xl text-red-500" />
          <p className="text-sm font-medium uppercase text-gray-500">
            Falha: {failureCount}
          </p>
        </div>
      </Card.CardContent>
    </Card.Card>
  );
};

export default LaunchResults;
