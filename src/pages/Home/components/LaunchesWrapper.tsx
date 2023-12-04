import { Card, Input } from "@/components/shadcn/ui";
import useLaunches from "@/hooks/useLaunch";
import React from "react";
import { FaSearch } from "react-icons/fa";
import LaunchRecord from "./LaunchRecord";
import Pagination from "./Pagination";

const LaunchesWrapper: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { isLoading, launches } = useLaunches(currentPage);

  if (isLoading) return <div>Carregando...</div>;

  const totalPages = launches?.totalPages || 0;

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
            {launches?.results.map((launch) => (
              <LaunchRecord
                avatarImageURL={launch.links.patch.small}
                avatarImageAlt={launch.name}
                flightNumber={launch.flight_number}
                launchDate={launch.date_utc}
                launchSuccess={launch.success}
                missionName={launch.name}
                youtubeVideoURL={launch.links.webcast}
                key={launch.id}
              />
            ))}
          </ul>
        </Card.CardContent>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </Card.Card>
    </section>
  );
};

export default LaunchesWrapper;
