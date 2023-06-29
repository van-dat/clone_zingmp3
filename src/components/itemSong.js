import React, { memo } from "react";
import icons from "../ultis/icon";
import moment from "moment";

const ItemSong = ({ songData }) => {
  console.log(songData);
  const { PiMusicNotesSimple } = icons;
  return (
    <div className="flex justify-between  text-main-100 border-b   border-b-[#ffffff0d]  rounded-[5px]">
      <div className="flex items-center gap-2 p-2 flex-1">
        <span>
          <PiMusicNotesSimple />
        </span>
        <div className="">
          <img
            src={songData?.thumbnail}
            alt="thumbnail"
            className="w-10 h-10 rounded-[4px]"
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-sm text-main whitespace-nowrap ">
            {songData?.title?.length > 15
              ? `${songData?.title?.slice(0, 15)}...`
              : songData?.title}
          </span>
          <span className="text-xs">{songData?.artistsNames}</span>
        </div>
      </div>
      <div className="  flex-1 flex justify-center text-xs whitespace-nowrap">{songData?.album?.title?.length > 30
              ? `${songData?.album?.title?.slice(0, 30)}...`: songData?.album?.title}</div>
      <div className="flex-1 flex justify-end ">{moment.utc(songData?.duration *1000).format('mm:ss')}</div>
      
       
    </div>
  );
};

export default memo(ItemSong);
