import React, { memo } from "react";
import { AudioLoad, SectionItem } from "./";

const Section = ({ data  }) => {
  
  return (
    <div className="px-9 py-5 flex flex-col gap-2 ">
      <div className="flex justify-between items-center  pb-2 ">
        <h3 className="text-main text-xl font-bold">{data?.title}</h3>
        <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
      </div>
      <SectionItem
        data={data?.items?.filter((i, index) => index < 5)}
      />
    </div>
  );
};

export default memo(Section);
