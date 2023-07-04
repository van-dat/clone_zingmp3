import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../api";
import moment from "moment";
import { ListSong } from "../../components";
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions'
const Playlist = () => {
  const { pid } = useParams();
  const [playList, setplayList] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchDataPlayList = async () => {
      const reponse = await apis.apiGetDetailPlayList(pid);
      console.log(reponse)
      if (reponse?.data.err === 0) {
        setplayList(reponse.data?.data);
        dispatch(actions.playAlbum(reponse?.data?.data?.song?.items))
      }
    };
    fetchDataPlayList();
  }, [pid]);
  return ( 
    <div className="flex flex-col overflow-hidden px-14 py-8  ">
      
      <div className="flex w-full gap-6">
        <div className="w-[30%] flex-none flex gap-3 flex-col ">
          <img
            src={playList?.thumbnailM}
            alt="thumbnail"
            className="rounded-lg shadow-sm"
          />
          <div className="flex flex-col items-center text-main-100 gap-1  text-xs">
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
      <div className=""><div className="w-[30%] flex-none flex gap-3 flex-col ">
          <img
            src={playList?.thumbnailM}
            alt="thumbnail"
            className="rounded-lg shadow-sm"
          /> 
          <div className="flex flex-col items-center text-main-100 gap-1  text-xs">
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
        </div></div>
    </div>
    
  );
};

export default Playlist;
