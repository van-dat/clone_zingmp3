import React, { memo, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../api";
import icons from "../../ultis/icon";
import { Songs, SectionItem, Artists } from "../../components";

const Artist = () => {
  const { RiPlayMiniFill, RiUserAddLine } = icons;
  const { singer } = useParams();
  const [dataArtist, setdataArtist] = useState();
  const ref = useRef()
  useEffect(() => {
    const fetchArtist = async () => {
      const reposeve = await apis.apiArtist(singer);
      if (reposeve?.data?.err === 0) {
        setdataArtist(reposeve?.data?.data);
      }
    };
    fetchArtist();
    // select lên đầu trang
    ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [singer]);
  console.log(dataArtist);
  return (
    <div className="flex flex-col gap-6">
      <div ref={ref} className="relative flex h-[350px] w-full">
        <div className="absolute top-[-70px] right-0 left-0">
          <img
            src={dataArtist?.cover}
            alt="cover"
            className="w-full  bg-cover object-cover h-[420px]  "
          />
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent via-transparent to-[#0c1318]"></div>
        <div className="absolute bottom-10 left-10 flex flex-col gap-6 w-full ">
          <span className="text-main text-6xl font-bold flex gap-4 items-center justify-start ">
            {dataArtist?.name}
            <span className="p-3 rounded-full bg-white text-btn hover:bg-btn hover:text-main">
              <RiPlayMiniFill size={24} />
            </span>
          </span>
          <div className="flex gap-4">
            <span className=" text-md text-main-100 font-medium">{`${Number(
              dataArtist?.follow
            ).toLocaleString()} người quan tâm`}</span>
            <button
              // onClick={() => navigate(item?.link)}
              className="flex bg-hover  items-center justify-center px-3 py-1 rounded-2xl text-sm text-main hover:bg-bg-layd"
            >
              <RiUserAddLine size={14} />
              <span className="px-1">QUAN TÂM</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-9">
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">
            {dataArtist?.sections[0]?.title}
          </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex flex-wrap grid grid-cols-2  pt-3 gap-x-6">
          {dataArtist?.sections[0]?.items
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
      {/*section  */}
      <div className="flex flex-col gap-4 px-9">
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">
            {dataArtist?.sections[1]?.title}
          </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex ">
          <SectionItem
            data={dataArtist?.sections[1]?.items}
            Style="text-main text-sm font-bold hover:text-btn"
            year
          />
        </div>
      </div>
      {/*section  */}
      <div className="flex flex-col gap-4 px-9">
        <div className="flex justify-between items-center ">
          <h3 className="text-main text-xl font-bold">
            {dataArtist?.sections[2]?.title}
          </h3>
          <span className="text-xs font-medium text-main-100">TẤT CẢ</span>
        </div>
        <div className="flex ">
          <SectionItem
            data={dataArtist?.sections[2]?.items}
            Style="text-main text-sm font-bold hover:text-btn"
            year
          />
        </div>
      </div>
      {/* artist */}
      <div className="flex flex-col gap-4 px-9">
        <div className="flex  items-center ">
          <h3 className="text-main text-xl font-bold">
            {dataArtist?.sections[6]?.title}
          </h3>
        </div>
        <div className="flex ">
          <Artists data={dataArtist?.sections[6]?.items} />
        </div>
      </div>
      <div className="px-9 flex flex-col w-full">
        <h3 className="text-main text-xl font-bold">{`Về ${dataArtist?.name}`}</h3>
        <div className="flex w-full gap-8 py-6 ">
          <img
            src={dataArtist?.thumbnailM}
            alt="thumbnailM"
            className="h-[259px] w-[35%] object-cover rounded-md object-top"
          />
          <div className="w-[60%] text-main-100">
            <p dangerouslySetInnerHTML={{ __html: dataArtist?.biography.slice(0, 500) }}></p>
            <div className="flex flex-col">
              <span className=" text-xl text-main font-bold">
                {Number(dataArtist?.follow).toLocaleString()}
              </span>
              <span>Người quan tâm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Artist);
