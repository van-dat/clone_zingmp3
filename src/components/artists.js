import React, { memo } from "react";
import { handleNumber } from "../ultis/fn";
import icons from "../ultis/icon";

const Artists = ({ data }) => {
  const { RiUserAddLine, PiShuffleThin } = icons;
  console.log(data);
  return (
    <div className="flex justify-between items-center gap-10  w-full">
      {data?.length > 0 &&
        data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 "
          >
            <div className="relative overflow-hidden group hover:rounded-full ">
              <img
                src={item.thumbnail}
                alt="thumbnail"
                className="  object-contain rounded-full group-hover:animate-scale-up"
              />
              <div className="absolute justify-center items-center top-0 right-0 left-0 bottom-0  hidden bg group-hover:flex ">
                <span className="p-2 border rounded-full">
                <PiShuffleThin  
                color="white"
                size={32}/>
                </span>
              </div>
            </div>
            <div className="flex text-main font-medium flex-col items-center ">
              <span className="  hover:text-btn hover:underline-offset-2 hover:underline">
                {item.name}
              </span>
              <span className="text-main-100">{`${handleNumber(
                item.totalFollow
              )} quan tâm`}</span>
            </div>
            <button className="flex bg-hover  items-center justify-center px-3 py-1 rounded-2xl text-sm text-main">
              <RiUserAddLine size={14} />
              <span className="px-1">QUAN TÂM</span>
            </button>
          </div>
        ))}
    </div>
  );
};

export default memo(Artists);
