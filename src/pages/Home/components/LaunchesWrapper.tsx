import { Card, Input } from "@/components/shadcn/ui";
import React from "react";
import { FaSearch } from "react-icons/fa";

const LaunchesWrapper: React.FC = () => {
  return (
    <section>
      <Card.Card className="my-10 rounded-md  py-5 text-center shadow-lg">
        <Card.CardTitle className="mb-5 text-xl font-semibold uppercase text-gray-600">
          Registro de Lançamentos
        </Card.CardTitle>
        <Card.CardContent>
          <div className="flex items-center gap-1  rounded-md border border-input px-4">
            <FaSearch className="text-gray-500" />
            <Input
              placeholder="Digite sua busca"
              className="w-full rounded-none border-l-0 border-none bg-transparent focus:border-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-gray-500 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
            />
          </div>
        </Card.CardContent>
      </Card.Card>
    </section>
  );
};

export default LaunchesWrapper;
