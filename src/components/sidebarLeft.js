import React from "react";
import logo from "../img/logo.svg";
import sidbarMenu from "../ultis/menu";
import { NavLink } from "react-router-dom";



const activeStyle = 'py-4 px-[25px] flex border-l-[4px] border-[#9b4de0] items-center gap-2 font-semibold text-white no-underline bg-slate-500 ';
const notActiveStyle = 'py-4 px-[25px] flex items-center gap-2 font-semibold text-[#c7c6c6] no-underline hover:text-white'
const SidebarLeft = () => {


  return (
    <div className="flex flex-col">
      <div className="w-full h-[70px] px-[25px] flex justify-start items-center ">
        <img src={logo} className="w-[120px]  object-content" alt="logo" />
      </div>
      <div>
        {sidbarMenu.map((item) => (
          <NavLink
          
            to={item.path}
            key={item.path}
            className={({isActive}) => isActive ? activeStyle : notActiveStyle}
          >
            {item.icons}
            <span className="font-medium text-sm">{item.test}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
