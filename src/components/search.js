import React, { useState } from "react";
import icons from "../ultis/icon";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";
import { useNavigate, createSearchParams } from "react-router-dom";
import path from "../ultis/path";
const { BiSearch, IoCloseOutline } = icons;

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setkeyword] = useState("");

  const handleSearch = async (e) => {
    if(keyword.length > 0) {
      if (e.keyCode === 13) {
        dispatch(action.setSearch(keyword));
        navigate({
          pathname: `${path.SEARCH}/${path.SEARCH_ALL}`,
          search: createSearchParams({
            q: keyword,
          }).toString(),
        });
      }
    }
  };

  return (
    <div className="w-1/2 bg-[#ffffff1a] rounded-[20px] items-center flex h-10 text-[#dadada] relative">
      {keyword && (
        <div onClick={()=> setkeyword('')} className="absolute right-5 cursor-pointer">
          <IoCloseOutline size={20} />
        </div>
      )}
      <button className="px-2 outline-none">
        <BiSearch size={24} />
      </button>
      <div className="w-[95%]">
        <input
          className="outline-none bg-transparent w-[90%] py-1 text-sm"
          type="text"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
          onKeyUp={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
