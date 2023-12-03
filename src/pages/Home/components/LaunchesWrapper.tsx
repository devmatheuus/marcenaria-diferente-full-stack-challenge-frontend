import { Card, Input } from "@/components/shadcn/ui";
import useLaunches from "@/hooks/useLaunch";
import React from "react";
import { FaSearch } from "react-icons/fa";
import LaunchRecord from "./LaunchRecord";

const LaunchesWrapper: React.FC = () => {
  const { isLoading, launches } = useLaunches();

  if (isLoading) return <div>Carregando...</div>;

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

          <ul className="mt-6 flex flex-col gap-5 py-2">
            {launches?.results.map(() => <LaunchRecord />)}
          </ul>
        </Card.CardContent>
      </Card.Card>
    </section>
  );
};

export default LaunchesWrapper;
