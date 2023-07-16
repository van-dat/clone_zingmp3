import React, { memo } from "react";
import { useSelector } from "react-redux";
import { handleNumber } from "../../ultis/fn";
import { Songs, SectionItem, Artists } from "../../components";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);
  return (
    <div className="px-9 py-6 flex flex-col gap-10">
      <div className="flex flex-col text-[#ddd] gap-6">
        <span className="text-xl font-bold">Nổi Bật</span>
        <div className="flex flex-wrap text-main-100 gap-8">
          <div className="flex-1 flex gap-6 items-center text-xs bg-sider-left p-2 rounded-md hover:bg-main-100  ">
            <img
              src={searchData?.top?.thumbnail}
              alt="thumbnail"
              className={`h-[84px] w-[84px] ${
                searchData?.top?.objectType === "artist" && "rounded-full"
              }`}
            />
            <div className="flex flex-col gap-1">
              <span>{`${
                searchData?.top?.objectType === "artist" ? "Nghệ sĩ" : "Bài Hát"
              }`}</span>
              <span className="text-sm font-medium text-main">
                {searchData?.top?.name}
              </span>
              {searchData?.top?.objectType === "artist" && (
                <span>{`${handleNumber(
                  searchData?.artists[0].totalFollow
                )} quan tâm`}</span>
              )}
            </div>
          </div>
          {searchData?.songs
            ?.filter((i, index) => index < 2)
            .map((item) => (
              <div
                className="flex-1 bg-sider-left rounded-md"
                key={item.encodeId}
              >
                <Songs
                  thumbnail={item.thumbnail}
                  artistsNames={item.artistsNames}
                  title={item.title}
                  encodeId={item.encodeId}
                  Song="Bài hát"
                  Style="h-84px w-84px rounded-md object-contain"
                />
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">Bài Hát </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex flex-wrap grid grid-cols-2  pt-8 gap-x-6">
          {searchData?.songs
            ?.filter((i, index) => index < 6)
            ?.map((item) => (
              <div
                key={item.encodeId}
                className="border-b cursor-pointer   border-b-[#ffffff0d]  rounded-[5px] "
              >
                <Songs
                  thumbnail={item.thumbnail}
                  artistsNames={item.artistsNames}
                  title={item.title}
                  encodeId={item.encodeId}
                  time={item.duration}
                  btn
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">Playlist/Album </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex ">
          <SectionItem
            data={searchData?.playlists?.filter((i, index) => index < 6)}
            Style="text-main text-sm font-bold hover:text-btn"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">Nghệ Sĩ/OA </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex ">
          <Artists
            data={searchData?.artists?.filter((i, index) => index < 5)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SearchAll);
