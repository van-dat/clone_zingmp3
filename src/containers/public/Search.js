import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { SiderSearch } from "../../ultis/menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchAll = () => {
  const { keyword } = useSelector((state) => state.music);
  return (
    <div className="pt-[70px]">
      <div className="w-full border-b border-default ">
        <div className="flex px-9 font-medium text-sm gap-4 text-[#ddd] items-center cursor-pointer   ">
          <h3 className="text-2xl font-bold text-main ">KẾT QUẢ TÌM KIẾM</h3>
          {SiderSearch.length > 0 && SiderSearch?.map((item, index) => (
            <NavLink 
            key={index}
            to={`${item.path}?q=${keyword}`}
            className={({ isActive }) =>isActive ? "border-b-2 border-btn py-4  ": "cursor-pointer hover:text-main "
            }
          >
            {item.text}
          </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full h-5"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(SearchAll);
