import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../api";
import moment from "moment";
import { ListSong } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultis/icon";
import { AudioLoad } from "../../components";

const Playlist = () => {
  const { PiPlayCircleThin } = icons;
  const { pid } = useParams();
  const [playList, setplayList] = useState({});
  const dispatch = useDispatch();
  const { isPlaying, songs } = useSelector((state) => state.music);
  useEffect(() => {
    const fetchDataPlayList = async () => {
      const reponse = await apis.apiGetDetailPlayList(pid);
      if (reponse?.data.err === 0) {
        setplayList(reponse.data?.data);
        dispatch(actions.playAlbum(reponse?.data?.data?.song?.items));
      }
    };
    fetchDataPlayList();
  }, [pid]);
  return (
    <div className="flex flex-col overflow-hidden px-14 py-8  ">
      <div className="flex w-full gap-6">
        <div className="w-[30%] flex-none flex gap-3 flex-col  ">
          <div className="w-full overflow-hidden relative group/edit hover:rounded-lg">
            <img
              src={playList?.thumbnailM}
              alt="thumbnail"
              className={`shadow-sm object-contain rounded-lg  cursor-pointer group-hover/edit:animate-scale-up`}
            />
            <div className=" w-full absolute top-0 bottom-0 left-0 right-0 group-hover/edit:bg-bg-layd   group-hover/edit:visible">
              <span className="flex h-full justify-center items-center text-white">
                {isPlaying ? <span className=" drop-shadow-lg p-2 rounded-full border border-white"><AudioLoad/></span> : <PiPlayCircleThin  size={48}/>}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center  text-main-100 gap-1  text-xs">
            <h3 className="text-xl font-bold text-main ">{playList?.title}</h3>
            <span className="text-md">
              Cập nhật :
              <span className="pl-1">
                {moment(playList?.contentLastUpdate).format("DD/MM/YYYY")}
              </span>
            </span>
            <span>{playList?.artistsNames}</span>
            <span>{`${Math.round(
              playList?.like / 1000
            )}K người yêu thích`}</span>
          </div>
        </div>
        <div className="flex-auto ">
          <div className="text-sm">
            <span className="text-main-100">Lời tựa </span>
            <span className="text-main">{playList?.sortDescription}</span>
          </div>
          <ListSong
            songs={playList?.song?.items}
            totalDuration={playList?.song?.totalDuration}
          />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
