import React from "react";
import logo from "../img/logo.svg";
import logo1 from "../img/logo1.svg";

import sidbarMenu from "../ultis/menu";
import { NavLink, useNavigate } from "react-router-dom";
import Path from "../ultis/path";




const SidebarLeft = () => {
  const activeStyle = 'py-4 px-[25px] flex border-l-[4px] border-[#9b4de0] items-center gap-2 font-semibold text-white no-underline bg-slate-500 ';
  const notActiveStyle = 'py-4 px-[25px] flex items-center gap-2 font-semibold text-[#c7c6c6] no-underline hover:text-white'
  const Navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col">
      <div onClick={() => Navigate(Path.HOME)} className="w-full h-[70px] px-4 flex justify-start items-center cursor-pointer min-[1024px]:px-[25px] ">
        <img src={logo} className="w-[120px] hidden   object-content min-[1024px]:inline " alt="logo" />
        <img src={logo1} className=" inline   object-content min-[1024px]:hidden " alt="logo" />
      </div>
      <div>
        {sidbarMenu?.map((item) => (
          <NavLink
          
            to={item.path}
            key={item.path}
            className={({isActive}) => isActive ? activeStyle : notActiveStyle}
          >
            {item.icons}
            <span className="font-medium text-sm hidden  min-[1024px]:inline ">{item.test}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
