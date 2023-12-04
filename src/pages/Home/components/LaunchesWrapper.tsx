import { Card, Input } from "@/components/shadcn/ui";
import useLaunches from "@/hooks/useLaunch";
import React from "react";
import { FaSearch } from "react-icons/fa";
import LaunchRecord from "./LaunchRecord";
import Pagination from "./Pagination";
import { useDebounce } from "use-debounce";
import Loader from "@/components/Loader";

const LaunchesWrapper: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const RESULTS_PER_PAGE = 5;

  const { launches, isLoading, isError } = useLaunches(
    currentPage,
    RESULTS_PER_PAGE,
    debouncedSearch,
  );

  if (isLoading || isError)
    return (
      <Card.Card
        className="my-10 w-full rounded-md py-5 text-center shadow-lg"
        role="section"
      >
        <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
          Registro de Lançamentos
        </Card.CardTitle>
        <div className="flex h-screen w-full items-center">
          <Loader />
        </div>
      </Card.Card>
    );

  const totalPages = launches?.totalPages || 0;

  return (
    <Card.Card
      className="my-10 w-full rounded-md py-5 text-center shadow-lg"
      role="section"
    >
      <Card.CardTitle className="mb-5 text-lg font-semibold uppercase text-gray-600">
        Registro de Lançamentos
      </Card.CardTitle>
      <Card.CardContent>
        <div className="flex items-center gap-1  rounded-md border border-input px-4">
          <FaSearch className="text-gray-500" />
          <Input
            placeholder="Digite sua busca"
            className="w-full rounded-none border-l-0 border-none bg-transparent focus:border-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-gray-500 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
  );
};

export default LaunchesWrapper;
