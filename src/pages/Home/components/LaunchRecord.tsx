import { Avatar, Button } from "@/components/shadcn/ui";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const LaunchRecord: React.FC = () => {
  return (
    <li className="flex justify-around rounded-sm py-3 shadow-md">
      <div className="flex w-fit flex-col items-center justify-between gap-2">
        <Avatar.Avatar className="h-8 w-8">
          <Avatar.AvatarImage
            src="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
            alt="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
          />
        </Avatar.Avatar>
        <p className="text-base font-semibold text-gray-600">180</p>
      </div>
      <div className="flex w-fit flex-col items-center justify-between">
        <p className="text-base font-semibold text-gray-600">FalconSat</p>
        <p className="text-base font-semibold text-gray-600">05/10/2022</p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Button
          className=""
          title="Assistir vídeo no Youtube"
          size="icon"
          variant="ghost"
        >
          <a href="#">
            <FaYoutube className="text-2xl text-red-500" />
          </a>
        </Button>

        <p className="text-base font-semibold text-green-400">Sucesso</p>
      </div>
    </li>
  );
};

export default LaunchRecord;