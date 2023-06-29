import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../api";
import icons from "../ultis/icon";
import { Prev } from "react-bootstrap/esm/PageItem";

const Playder = () => {
  const {
    AiOutlineHeart,
    FiMoreHorizontal,
    PiRepeatThin,
    MdSkipPrevious,
    PiPlayCircleThin,
    MdSkipNext,
    PiShuffleThin,
    PiPauseCircleLight,
  } = icons;
  const hover_bg = "p-[6px] rounded-[20px] hover:bg-hover cursor-pointer";
  const { curSongId ,isPlaying } = useSelector((state) => state.music);
  const [Result2Info, setResult2Info] = useState(null);
  const [playSong, setPlaySong] = useState(null);
  const audioElm = new Audio()
  // const [isPlay, setisPlay] = useState(false);
  useEffect(() => {
    const fetchDataSong = async () => {
      const [result1, result2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);

      if (result1.data.err === 0) {
        setResult2Info(result1.data.data);
      }
      if (result2.data.err === 0) {
        setPlaySong(result2.data.data["128"]);
      }
    };

    fetchDataSong();
  }, [curSongId]);
  

  const handleClickPlay = () => {
  }
  return (
    <div className="px-5 flex h-full  ">
      <div className="w-[30%] flex-auto flex items-center gap-4">
        <img
          src={Result2Info?.thumbnail}
          className="w-[64px] h-[64px] object-cover rounded-lg"
          alt={Result2Info?.alias}
        />
        <div className="flex flex-col text-sm ">
          <span className="text-main font-semibold text-sm">
            {Result2Info?.title}
          </span>
          <span className="text-main-100 text-xs">
            {Result2Info?.artistsNames}
          </span>
        </div>
        <div className="flex items-center">
          <span className={hover_bg}>
            <AiOutlineHeart size={16} color="#fff" />
          </span>
          <span className={hover_bg}>
            <FiMoreHorizontal size={16} color="#fff" />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-center">
        <div className="text-[#fff] flex items-center gap-[10px]">
          <span className={hover_bg}>
            <PiShuffleThin size={20} />
          </span>
          <span className={hover_bg}>
            <MdSkipPrevious size={20} />
          </span>
          <span  className="p-[6px] rounded-[20px] hover:text-play cursor-pointer " onClick={handleClickPlay}>
            {isPlaying?<PiPauseCircleLight size={48}/>:<PiPlayCircleThin size={48} />}
          </span>
          <span className={hover_bg}>
            <MdSkipNext size={20} />
          </span>
          <span className={hover_bg}>
            <PiRepeatThin size={20} />
          </span>
        </div>
        <div></div>
      </div>
      <div className="w-[30%] text-[10px]">Playder right</div>
    </div>
  );
};

export default Playder;
