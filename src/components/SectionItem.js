import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import icons from "../ultis/icon";
import { AudioLoad } from "./";



const { PiPlayCircleThin } = icons;
const SectionItem = ({data, Style}) => {
  const Navigate = useNavigate();
  const { isPlaying } = useSelector((state) => state.music);
    return (
        <div className="flex  justify-between items-center gap-8">
        {data &&
          data?.length > 0 &&
          data?.map((item, index) => (
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
                  className=" h-[215px] w-[215px] rounded-md object-contain img  group-hover/edit:animate-scale-up"
                />
                <div className=" justify-center hidden items-center text-white absolute top-0 right-0 left-0 bottom-0 group-hover/edit:flex  group-hover/edit:bg-bg-layd ">
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

              <div className="text-xs text-main-100 flex-col flex ">
                <span className={Style}>{`${
                  item.title?.length > 26
                    ? `${item.title?.slice(0, 24)}...`
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
    );
}

export default SectionItem;
