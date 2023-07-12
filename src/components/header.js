import React from "react";
import { Search } from "./";
import user from "../img/user.png";
import icons from "../ultis/icon";

const { BsArrowRight, BsArrowLeft } = icons;
const Header = () => {
  return (
    <div className="flex justify-between w-full items-center px-9  ">
      <div className="flex gap-6 w-full items-center">
        <div className="flex gap-6">
          <span>
            <BsArrowLeft size={24} color="white" />
          </span>
          <span>
            <BsArrowRight size={24} color="#666" />
          </span>
        </div>
        <div className="w-full">
          <Search />
        </div>
      </div>
      <div className="flex">
        <figure className="w-[40px] h-[40px]  rounded-[50%] overflow-hidden">
          <img
            src={user}
            alt="anh"
            className=" object-contain"
          />
        </figure>
      </div>
    </div>
  );
};

export default Header;
