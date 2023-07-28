import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import icons from "../ultis/icon";
import { AudioLoad } from "./";

const { PiPlayCircleThin } = icons;
const SectionItem = ({ data, Style, number, year }) => {
  const Navigate = useNavigate();
  const { isPlaying } = useSelector((state) => state.music);
  const n = number || 5;
  return (
    <div className="w-full flex items-center  ">
      {data &&
        data?.length > 0 &&
        data
          ?.filter((i, index) => index < n)
          .map((item, index) => (
            <div key={item.encodeId} className="w-1/3 flex flex-col gap-2 px-3 min-[1024px]:w-1/5 ">
              <div
                className="cursor-pointer overflow-hidden relative group/edit hover:rounded-md "
                onClick={() => {
                  Navigate(item?.link?.split(".")[0], {
                    state: { playAblum: false },
                  });
                }}
              >
                <img
                  src={item.thumbnailM}
                  alt="avatar"
                  className="  rounded-md object-contain img  group-hover/edit:animate-scale-up"
                />
                <div className=" justify-center hidden items-center text-white absolute top-0 right-0 left-0 bottom-0 group-hover/edit:flex  group-hover/edit:bg-bg-layd ">
                  {!isPlaying ? (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        Navigate(item?.link?.split(".")[0], {
                          state: { playAblum: true },
                        });
                      }}
                    >
                      <PiPlayCircleThin size={40} />
                    </span>
                  ) : (
                    <AudioLoad />
                  )}
                </div>
              </div>
              <div className="text-sm text-main-100 flex-col flex gap-1 w-full  ">
                <span className={Style}>{`${
                  item.title?.length > 16
                    ? `${item.title?.slice(0, 16)}...`
                    : `${item.title}`
                }`}</span>
                {!item.uid ? (
                  <span className="hidden min-[1024px]:block">{`${item.sortDescription?.slice(0, 26)}...`}</span>
                ) : year ?  (
                  <span className="text-xs ">{item.releaseDateText}</span>
                ):  (
                  <span className="text-xs">{item.artistsNames}</span>
                )}
              </div>
            </div>
          ))}
    </div>
  );
};

export default SectionItem;
