import React from "react";
import icons from "../ultis/icon";

const { BiSearch } = icons;
const Search = () => {
  return (
    <div className="w-1/2 bg-[#ffffff1a] rounded-[20px] items-center flex h-10 text-[#dadada]">
      <button className="px-2 outline-none">
        <BiSearch size={24} />
      </button>
      <div className="w-[95%]">
        <input
          className="outline-none bg-transparent w-[90%] py-1 text-sm"
          type="text"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        />
      </div>
    </div>
  );
};

export default Search;
