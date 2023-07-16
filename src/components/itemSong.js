import React, { memo } from "react";
import icons from "../ultis/icon";
import moment from "moment";
import { useDispatch  } from "react-redux";
import * as actions from '../store/actions'

const { PiMusicNotesSimple } = icons;
const ItemSong = ({ songData }) => {
  const dispatch = useDispatch()
  return (
    <div 
    className="flex justify-between  text-main-100 border-b cursor-pointer   border-b-[#ffffff0d]  rounded-[5px] hover:bg-hover"
    onClick={() => {
      dispatch(actions.setCurSongId(songData?.encodeId));
      dispatch(actions.isPlay(true));
      dispatch(actions.acAlbum(true));
      dispatch(actions.setRecentSong({ thumbnail:songData?.thumbnail,artistsNames:songData?.artistsNames,encodeId:songData?.encodeId,title:songData?.title}))
    }}
    >
      <div className="flex items-center gap-2 p-2 flex-1">
        <span>
          <PiMusicNotesSimple />
        </span>
        <div className="">
          <img
            src={songData?.thumbnail}
            alt="thumbnail"
            className="w-[45px] h-[45px] rounded-[4px]"
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-sm text-main whitespace-nowrap ">
            {songData?.title?.length > 15
              ? `${songData?.title?.slice(0, 15)}...`
              : songData?.title}
          </span>
          
          <span className="text-xs flex items-center">
            {songData?.artistsNames}
          </span>
        </div>
      </div>
      {/* ALBUM */}
      <div className="  flex-1 flex justify-center items-center text-xs whitespace-nowrap">
        {songData?.album?.title?.length > 30
          ? `${songData?.album?.title?.slice(0, 15)}...`
          : songData?.album?.title}
      </div>
        {/* time */}
      <div className="flex-1    text-xs ">
        <span className="float-right pr-4 h-full flex items-center ">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
        </span>
      </div>
    </div>
  );
};

export default memo(ItemSong);
