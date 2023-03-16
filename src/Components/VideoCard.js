import React from "react";
import { useConvert } from "../utils/useConvert";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="w-[250px]">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="pt-2">
        <p className="font-medium text-sm leading-5 line-clamp-2 line">
          {title}
        </p>
        <p className="text-base text-[rgb(96,96,96)]">{channelTitle}</p>
        <p className="text-sm text-[rgb(96,96,96)]">{useConvert(statistics.viewCount)} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
