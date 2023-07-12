import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { AudioLoad } from "./";
import icons from "../ultis/icon";
import { useSelector } from "react-redux";

const Section = ({ data }) => {
  const { PiPlayCircleThin } = icons;
  const Navigate = useNavigate();
  const { isPlaying, songs, curSongId } = useSelector((state) => state.music);
  const handleMountout = () => {
  }
  return (
    <div className="px-9 py-5 flex flex-col gap-2 ">
      <div className="flex justify-between items-center  pb-2 ">
        <h3 className="text-main text-xl font-bold">{data?.title}</h3>
        <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
      </div>
      <div className="flex  justify-between items-center gap-8">
        {data &&
          data?.items?.length > 0 &&
          data.items?.map((item, index) => (
            <div
              key={item.encodeId}
              className={`flex w-full flex-col w-1/5 gap-2 ${
                index < 5 ? "block" : "hidden"
              }`}
            >
              <div
                className="cursor-pointer overflow-hidden relative group/edit hover:rounded-md "
                onClick={() => {
                  Navigate(item?.link?.split(".")[0], {state: {playAblum : false}});
                }}
              >
                <img
                  src={item.thumbnailM}
                  alt="avatar"
                  className="rounded-md object-contain img  group-hover/edit:animate-scale-up"
                  onMouseLeave={handleMountout}
                />
                <div className="flex justify-center hidden items-center text-white absolute top-0 right-0 left-0 bottom-0 group-hover/edit:flex  group-hover/edit:bg-bg-layd ">
                  {!isPlaying ? (
                    <span onClick={(e)=> {
                      e.stopPropagation()
                      Navigate(item?.link?.split(".")[0], {state: {playAblum : true}})
                    }
                    }>
                      <PiPlayCircleThin size={40} />
                    </span>
                  ) : (
                    <AudioLoad />
                  )}
                </div>
              </div>

              <div className="text-xs text-main-100 ">
                <span>{`${
                  item.title?.length > 40
                    ? `${item.title?.slice(0, 26)}...`
                    : `${item.title}`
                }`}</span>
                {item.uid ? (
                  <span>{item.artistsNames}</span>
                ) : (
                  <span>{`${item.sortDescription?.slice(0, 26)}...`}</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Section);
