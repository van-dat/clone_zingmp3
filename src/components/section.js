import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Section = () => {
  const { daily } = useSelector((state) => state.app);
  const Navigate = useNavigate()
  console.log(daily);
  return (
    <div className="px-9 flex flex-col gap-2">
      <div className="flex justify-between items-center ">
        <h3 className="text-main text-xl font-bold">{daily?.title}</h3>
        <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
      </div>
      <div className="flex  justify-between items-center gap-8 pb-[500px] ">
        {daily &&
          daily?.items?.length > 0 &&
          daily.items.map((item) => (
            <div
              key={item.encodeId}
              className="flex w-full flex-col w-1/5 gap-2  "
            >
              <div className="cursor-pointer" onClick={()=>{
                Navigate(item?.link?.split('.')[0])
                
              }}>
              <img src={item.thumbnailM} alt="avatar" />

              </div>

              <div className="text-xs text-main-100 ">
                <span>{item.title}</span>
                <span>{`${item.sortDescription?.slice(0, 30)}...`}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Section);
