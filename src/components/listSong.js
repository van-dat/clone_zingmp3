import React, { memo } from "react";
import { ItemSong } from "./";
import icons from "../ultis/icon";

const ListSong = ({ songs, totalDuration }) => {
  // console.log(songs, totalDuration)
  const { PiArrowsDownUpFill } = icons;
  return (
    <div className="w-full flex overflow-hidden  h-screen flex-col ">
      <div className="flex  text-xs px-2 py-5 text-main-100 font-semibold border-b   border-b-[#ffffff0d]  rounded-[5px]">
        <span className="flex-1 flex items-center gap-2">
          <span>
            <PiArrowsDownUpFill size={18} />
          </span>
          BÀI HÁT
        </span>
        <span className="flex-1 flex justify-center">ALBUM</span>
        <span className="flex-1 flex justify-end">THỜI GIAN</span>
      </div>

      <div className="flex flex-col overflow-y-auto scrollbar-hide">
        {songs?.map((item) => (
          <ItemSong key={item.encodeId} songData={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(ListSong);
