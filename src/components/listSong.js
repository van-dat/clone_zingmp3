import React, { memo } from "react";
import { ItemSong } from "./";
import icons from "../ultis/icon";
import moment from "moment";
import { useSelector } from "react-redux";

const ListSong = ({ totalDuration, isHidden, style }) => {
  const { PiArrowsDownUpFill, PiDotOutlineFill } = icons;
  const { songs } = useSelector((state) => state.music);
  console.log(songs)
  const border = 'border-b   border-b-[#ffffff0d]  rounded-[5px]'
  return (
    <div className= {`${!isHidden && 'w-full flex overflow-hidden  h-screen flex-col'}  ${border}`}>
      <div className="flex  text-xs px-2 py-5 text-main-100 font-semibold ">
        <span className={`${isHidden ? 'flex-1 flex  align-self-center gap-20 text-xl font-bold text-main' :'flex-1 flex  align-self-center gap-20'}`}>
          {!isHidden && (
            <span>
              <PiArrowsDownUpFill size={18} />
            </span>
          )}
          BÀI HÁT
        </span>

        {!isHidden && <span className="flex-1 flex justify-center">ALBUM</span>}
        {!isHidden && (
          <span className="flex-1 flex justify-end">THỜI GIAN</span>
        )}
      </div>

      <div className={style || 'flex flex-col overflow-y-auto h-[500px] w-full scrollbar-hide '}>
        {songs?.map((item) => (
          <ItemSong key={item.encodeId} songData={item} Hidden />
        ))}
      </div>
      {totalDuration && 
      <div className="flex text-main-100 items-center py-3 text-[13px] font-medium gap-1">
        <span>{`${songs?.length} Bài hát`}</span>
        <span>
          <PiDotOutlineFill size={20} />
        </span>
        <span>{moment.utc(totalDuration * 1000).format("mm:ss")}</span>
      </div>}
    </div>
  );
};

export default memo(ListSong);
