import React, { memo } from "react";
import icons from "../../ultis/icon";
import { NavLink , useParams } from "react-router-dom";
import {ItemSong} from '../../components'
const { RiPlayMiniFill } = icons;
const WeekChart = ({ weekChart }) => {
    const {pid} = useParams()
  console.log(weekChart);
  console.log(weekChart?.find(i => i.link?.includes(pid)).items)
  const activeStyle =
    "text-2xl font-bold text-main py-4 border-b-4 border-[#9b4de0]";
  const noactiveStyle =
    "text-2xl font-bold text-main-100 py-4 hover:text-main ";

  return (
    <div className="pt-[70px] flex px-9 flex-col">
      <div className="flex items-center gap-2  py-10">
        <h3 className="text-4xl font-bold  text-main">Bảng Xếp Hạng Tuần</h3>
        <span className="p-2 rounded-full bg-btn  ">
          <RiPlayMiniFill size={20} color="#fff" />
        </span>
      </div>
      <div className="flex gap-8">
        {weekChart?.map((item) => (
          <NavLink
            key={item.chartId}
            to={item.link?.split(".")[0]}
            className={({ isActive }) =>
              isActive ? activeStyle : noactiveStyle
            }
          >
            {item.country === "vn"
              ? "VIỆT NAM"
              : item.country === "us"
              ? "US-UK"
              : item.country === "korea"
              ? "K-POP"
              : ""}
          </NavLink>
        ))}
      </div>
      <div className="pt-10">
        {weekChart?.find(i => i.link?.includes(pid)).items?.map((item, index) => 
            <ItemSong
            songData={item}
            STT = {index+1}
            Hidden
            pid={weekChart?.find(i => i.link?.includes(pid))?.playlistId}
          />
        )}
      </div>
    </div>
  );
};

export default memo(WeekChart);
