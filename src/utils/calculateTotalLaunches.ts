import { LaunchStats } from "@/types/launches/launches.types";

const calculateTotalLaunches = (launchData: LaunchStats) => {
  return launchData.successful + launchData.failed;
};

export default calculateTotalLaunches;
