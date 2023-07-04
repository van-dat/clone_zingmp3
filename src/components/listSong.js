import React, { memo } from "react";
import { ItemSong } from "./";
import icons from "../ultis/icon";
import moment from "moment";
import { useSelector } from "react-redux";


const ListSong = ({ totalDuration }) => {
  const { PiArrowsDownUpFill, PiDotOutlineFill } = icons;
  const {songs} = useSelector(state => state.music)
  return (
    <div className="w-full flex overflow-hidden  h-screen flex-col ">
      <div className="flex  text-xs px-2 py-5 text-main-100 font-semibold border-b   border-b-[#ffffff0d]  rounded-[5px]">
        <span className="flex-1 flex  align-self-center gap-2">
          <span>
            <PiArrowsDownUpFill size={18} />
          </span>
          BÀI HÁT
        </span>
        <span className="flex-1 flex justify-center">ALBUM</span>
        <span className="flex-1 flex justify-end">THỜI GIAN</span>
      </div>

      <div className="flex flex-col overflow-y-auto h-[500px] scrollbar-hide ">
        {songs?.map((item) => (
          <ItemSong key={item.encodeId} songData={item} />
        ))}
      </div>
      <div className="flex text-main-100 items-center py-3 text-[13px] font-medium gap-1" >
          <span>{`${songs?.length} Bài hát`}</span>
          <span><PiDotOutlineFill size={20}/></span>
          <span>{moment.utc(totalDuration * 1000).format('HH:mm')}</span>

      </div>

      
    </div>
  );
};

export default memo(ListSong);
