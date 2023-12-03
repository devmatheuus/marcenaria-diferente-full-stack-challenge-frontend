import api from "@/lib/axios";
import { LaunchResponse } from "@/types/launches/launches.types";
import { useQuery } from "@tanstack/react-query";

const useLaunches = (page = 1, limit = 4, search?: string) => {
  const queryKey = ["launches", { page, limit, search }];

  const { data, isLoading, isError } = useQuery<LaunchResponse>({
    queryKey,
    queryFn: async () => {
      const response = await api.get("/launches", {
        params: {
          page,
          limit,
          search,
        },
      });

      return response.data;
    },
  });

  return {
    launches: data,
    isLoading,
    isError,
  };
};

export default useLaunches;
