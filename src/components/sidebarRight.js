import React, { useState, useEffect } from "react";
import icons from "../ultis/icon";
import { useSelector } from "react-redux";
import { Songs } from "./";
import * as apis from "../api";

const SidebarRight = () => {
  const { TfiAlarmClock, FiMoreHorizontal } = icons;
  const [active, setactive] = useState(0);
  const { curSongData, curAlbumId, curSongId, recentSong , isPlaying} = useSelector(
    (state) => state.music
  );
  const [dataAlbum, setdataAlbum] = useState(null);

  useEffect(() => {
    const fetchDataPlayList = async () => {
      const reponse = await apis.apiGetDetailPlayList(curAlbumId);
      if (reponse?.data?.err === 0)
        setdataAlbum(reponse?.data?.data?.song?.items);
    };
    if (curAlbumId) fetchDataPlayList();
    
  }, [curAlbumId]);
  useEffect(() => {
    if(isPlaying) setactive(false)
    
  }, [isPlaying]);
  console.log(recentSong)

  return (
    <div className=" h-screen bg-sidebar-rigth w-full flex flex-col text-xs animate-slide-left text-[#ddd] relative border-l border-bf  ">
      <div className="fixed top-0 right-0 left-0 bg-main">
        <div className="h-[70px] flex border-b   border-b-[#ffffff0d] items-center px-2 justify-between ">
          <div className="flex rounded-full  py-[3px] px-[3px] bg-main-100 items-center ">
            <span
              className={`px-4 py-[6px]  rounded-full text-md cursor-pointer ${
                active === 0 && "bg-active"
              }`}
              onClick={() => setactive(0)}
            >
              Danh sách phát{" "}
            </span>
            <span
              className={`px-4 py-[6px]  rounded-full text-md cursor-pointer ${
                active === 1 && "bg-active"
              }
              }`}
              onClick={() => setactive(1)}
            >
              Nghe gần đây{" "}
            </span>
          </div>
          <span className="p-2 rounded-full bg-main-100 cursor-pointer">
            <TfiAlarmClock size={16} />
          </span>
          <span className="p-2 rounded-full bg-main-100 cursor-pointer">
            <FiMoreHorizontal size={16} />
          </span>
        </div>

        {!active && (
          <div className="flex flex-col p-2  ">
            <div className="flex  bg-btn rounded-md ">
              <Songs
                thumbnail={curSongData?.thumbnail}
                artistsNames={curSongData?.artistsNames}
                title={curSongData?.title}
                encodeId={curSongData?.encodeId}
              />
            </div>
            <div className="flex flex-col font-bold text-sm pt-[15px] px-2 pb-[5px] ">
              <span>Tiếp Theo</span>
              <span className="opacity-70 font-medium">
                Từ playlist
                <span className="text-play px-1">
                  {curSongData?.album?.title}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
      {!active ? 
      <div className="flex flex-col h-screen px-2 overflow-y-auto absolute top-[220px] left-0 right-0 pb-4 ">
        {dataAlbum
          ?.filter((item) => item.encodeId !== curSongId)
          .map((item) => (
            <Songs
              thumbnail={item?.thumbnail}
              artistsNames={item?.artistsNames}
              title={item?.title}
              encodeId={item?.encodeId}
              key={item?.encodeId}
              btn
            />
          ))}
      </div> 
      :
      <div className="flex flex-col h-screen px-2 overflow-y-auto absolute top-[70px] left-0 right-0 pb-4">
      {recentSong.map((item,index) => (
          <Songs
            thumbnail={item?.thumbnail}
            artistsNames={item?.artistsNames}
            title={item?.title}
            encodeId={item?.encodeId}
            btn
            key={index}
          />
        ))}
    </div>}
    </div>
  );
};

export default SidebarRight;
