import api from "@/lib/axios";
import { LaunchStats } from "@/types/launches/launches.types";
import { useQuery } from "@tanstack/react-query";

const useLaunchesStats = () => {
  const queryKey = ["launchesStats"];

  const { data, isLoading, isError } = useQuery<LaunchStats[]>({
    queryKey,
    queryFn: async () => {
      const response = await api.get("/launches/stats");

      return response.data;
    },
  });

  return {
    launchesStats: data,
    isLoading,
    isError,
  };
};

export default useLaunchesStats;
