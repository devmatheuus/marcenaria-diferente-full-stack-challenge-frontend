import Loader from "@/components/Loader";
import useLaunchesStats from "@/hooks/useLaunchStats";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const SuccessAndFailureLaunchesCount: React.FC = () => {
  const { launchesStats, isLoading } = useLaunchesStats();

  if (isLoading) return <Loader />;

  const successCount = launchesStats?.reduce(
    (acc, curr) => acc + curr.successful,
    0,
  );
  const failureCount = launchesStats?.reduce(
    (acc, curr) => acc + curr.failed,
    0,
  );

  return (
    <>
      <div className="flex items-center">
        <FaCheck className="mr-1 text-base text-green-500" />
        <p className="text-base text-gray-500">Sucesso: {successCount}</p>
      </div>

      <div className="flex items-center">
        <FaTimes className="mr-1 text-base text-red-500" />
        <p className="text-base text-gray-500">Falha: {failureCount}</p>
      </div>
    </>
  );
};

export default SuccessAndFailureLaunchesCount;
