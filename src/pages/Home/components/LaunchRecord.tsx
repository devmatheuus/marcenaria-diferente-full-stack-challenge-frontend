import { Avatar, Button } from "@/components/shadcn/ui";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import formatDate from "@/utils/formatDate";

type LaunchRecordProps = {
  avatarImageURL: string;
  avatarImageAlt: string;
  flightNumber: number;
  missionName: string;
  launchDate: string;
  launchSuccess: boolean;
  youtubeVideoURL: string;
};

const LaunchRecord: React.FC<LaunchRecordProps> = (props) => {
  return (
    <li className="flex justify-between rounded-sm px-4 py-3 shadow-md">
      <div className="flex w-fit flex-col items-center justify-between gap-2">
        <Avatar.Avatar className="h-8 w-8">
          <Avatar.AvatarImage
            src={props.avatarImageURL}
            alt={props.avatarImageAlt}
          />
        </Avatar.Avatar>
        <p className="text-base font-semibold text-gray-600">
          {props.flightNumber}
        </p>
      </div>
      <div className="flex w-fit flex-col items-center justify-between">
        <p className="text-base font-semibold text-gray-600">
          {props.missionName}
        </p>
        <p className="text-base font-semibold text-gray-600">
          {formatDate(props.launchDate)}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Button
          className=""
          title="Assistir vídeo no Youtube"
          size="icon"
          variant="ghost"
        >
          <a href={props.youtubeVideoURL} target="_blank" rel="noreferrer">
            <FaYoutube className="text-2xl text-red-500" />
          </a>
        </Button>

        {props.launchSuccess ? (
          <p className="text-base font-semibold text-green-400">Sucesso</p>
        ) : (
          <p className="text-base font-semibold text-red-400">Falha</p>
        )}
      </div>
    </li>
  );
};

export default LaunchRecord;
