import React, { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Songs } from "./";

const NewRelease = () => {
  const { newRelease } = useSelector((state) => state.app);
  const [isActive, setisActive] = useState(0);
  const [songArea, setsongArea] = useState([]);

  useEffect(() => {
    !isActive
      ? setsongArea(newRelease?.items?.all)
      : isActive === 1
      ? setsongArea(newRelease?.items?.vPop)
      : setsongArea(newRelease?.items?.others);
  }, [isActive]);
  return (
    <div className="px-9 py-5 flex flex-col gap-2 ">
      <div className="flex justify-between items-center  pb-2 ">
        <h3 className="text-main text-xl font-bold">{newRelease?.title}</h3>
        <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
      </div>
      <div className="flex gap-3 text-white pb-2">
        <button
          className={`rounded-xl border border-default text-xs px-5 py-1  ${
            !isActive && "bg-btn"
          }`}
          onClick={() => setisActive(0)}
          type="button"
        >
          TẤT CẢ
        </button>
        <button
          className={`rounded-xl border border-default text-xs px-5 py-1  ${
            isActive === 1 && "bg-btn"
          }`}
          onClick={() => setisActive(1)}
          type="button"
        >
          VIỆT NAM
        </button>
        <button
          className={`rounded-xl border border-default text-xs px-5 py-1  ${
            isActive === 2 && "bg-btn"
          }`}
          onClick={() => setisActive(2)}
          type="button"
        >
          QUỐC TẾ
        </button>
      </div>
      <div className="flex flex-wrap gap-1">
        {songArea
          ?.filter((item, index) => index < 12)
          ?.map((item) => (
            <div key={item.encodeId} className="laptop:w-[31%] flex tablet:w-[45%]">
              <Songs
                thumbnail={item.thumbnail}
                artistsNames={item.artistsNames}
                releaseDate={item.releaseDate}
                title={item.title}
                encodeId={item.encodeId}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(NewRelease);
