import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as apis from "../../api";
import moment from "moment";
import { ListSong } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultis/icon";
import { AudioLoad } from "../../components";
  
const Playlist = () => {
  const localtion = useLocation()
  const { PiPlayCircleThin } = icons;
  const { pid } = useParams();
  const dispatch = useDispatch();
  const [playList, setplayList] = useState({});
  const { isPlaying } = useSelector((state) => state.music);
  const ref = useRef()
  useEffect(() => {
    dispatch(actions.loading(true))
    const fetchDataPlayList = async () => {
      const reponse = await apis.apiGetDetailPlayList(pid);
      dispatch(actions.loading(false))
      dispatch(actions.setCurAlbumId(pid))
      if (reponse?.data.err === 0) {
        setplayList(reponse?.data?.data);
        dispatch(actions.playAlbum(reponse?.data?.data?.song?.items));
      }
    };

    fetchDataPlayList();


    ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [pid]);

  useEffect(() => {
      if(localtion?.state?.playAblum && playList) {
        const indexFirst = playList?.song?.items[0]
        dispatch(actions.setCurSongId(indexFirst?.encodeId))
        dispatch(actions.isPlay(true))
      }
  }, [pid, playList]);


  return (
    <div className="flex flex-col overflow-hidden px-14 pb-8 pt-[102px] " >
      <div className=" block w-full gap-6 min-[1024px]:flex  " >
        <div className="w-full inline-block gap-3  items-center min-[1024px]:w-[30%] min-[1024px]:flex-col  ">
          <div className=" h-[200px] w-[200px] inline-block overflow-hidden relative group/edit hover:rounded-lg min-[1024px]:h-[300px] min-[1024px]:w-[300px]">
            <img
              src={playList?.thumbnailM}
              alt="thumbnail"
              className=" shadow-sm object-contain rounded-lg  cursor-pointer group-hover/edit:animate-scale-up"
            />
            <div className="w-full absolute top-0 bottom-0 left-0 right-0 group-hover/edit:bg-bg-layd   group-hover/edit:visible">
              <span className="flex h-full justify-center items-center text-white">
                {isPlaying ? <span className=" drop-shadow-lg p-2 rounded-full border border-white"><AudioLoad/></span> : <PiPlayCircleThin  size={48}/>}
              </span>
            </div>
          </div>
          <div className=" inline-block flex-col items-center  text-main-100 gap-1  text-xs min-[1024px]:flex">
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
        <div className="flex-1 ">
          <div className="text-sm" ref={ref}>
            <span className="text-main-100">Lời tựa </span>
            <span className="text-main">{playList?.sortDescription}</span>
          </div>
          <ListSong
            totalDuration={playList?.song?.totalDuration}
          />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
