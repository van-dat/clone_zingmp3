import React, { useState } from "react";
import icons from "../ultis/icon";
const SidebarRight = () => {
  const {TfiAlarmClock, FiMoreHorizontal} = icons
  const [active, setactive] = useState(false);
  return (
    <div className="h-screen bg-sidebar-rigth w-full flex flex-col text-xs animate-slide-left text-[#ddd] ">
      <div className="h-[70px] flex border border-red-500 items-center px-2 justify-between ">
        <div className="flex rounded-full  py-[3px] px-[3px] bg-main-100 items-center ">
          <span  className={`px-4 py-[6px]  rounded-full text-md cursor-pointer ${!active && 'bg-active'}`} onClick={()=> setactive(prev => !prev)}>Danh sách phát </span>
          <span className={`px-4 py-[6px]  rounded-full text-md cursor-pointer ${active && 'bg-active'}`} onClick={()=> setactive(prev => !prev)} >Nghe gần đây </span>
        </div>
        <span className="p-2 rounded-full bg-main-100 cursor-pointer"><TfiAlarmClock size={16}/></span>
        <span className="p-2 rounded-full bg-main-100 cursor-pointer"><FiMoreHorizontal size={16}/></span>

      </div>
      <div className="">contend</div>

    </div>
  );
};

export default SidebarRight;
