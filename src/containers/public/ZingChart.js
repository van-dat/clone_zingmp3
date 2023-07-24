import React, { memo, useEffect, useState } from "react";
import { ChartRank } from "../../components";
import icons from "../../ultis/icon";
import * as api from "../../api";
import banner from "../../img/baner.jpg";
import { ItemSong } from "../../components";
import { useNavigate } from "react-router-dom";
const { RiPlayMiniFill } = icons;
const ZingChart = () => {
  const [dataZingChart, setdataZingChart] = useState();
  const [number, setnumber] = useState(10);
  const random = Math.floor(Math.random() * 4);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.apigetChart();
      if (response?.data?.err === 0) {
        setdataZingChart(response?.data?.data);
      }
    };

    fetchData();
    setnumber(10);
  }, []);
  return (
    <>
      <div className="pt-[70px] px-9 flex flex-col ">
        <div className="flex items-center gap-2">
          <h3 className="bg-gradient-to-r text-3xl font-bold bg-clip-text text-transparent from-[#ff9357] from-10% to-[#9100ff]">
            #zingchart
          </h3>
          <span className="p-[2px] rounded-full bg-white  ">
            <RiPlayMiniFill size={18} />
          </span>
        </div>
        <ChartRank
          iszingChart={true}
          chart={dataZingChart?.RTChart?.chart}
          rank={dataZingChart?.RTChart}
        />
        <div>
          {dataZingChart?.RTChart?.promotes
            ?.filter((i, index) => index === random)
            ?.map((item) => (
              <ItemSong key={item.encodeId} songData={item} Hidden sugget />
            ))}
          {dataZingChart?.RTChart?.items
            ?.filter((i, index) => index < number)
            .map((item, index) => (
              <ItemSong
                key={item.encodeId}
                songData={item}
                STT={index + 1}
                Hidden
              />
            ))}
        </div>
        {number === 10 && (
          <div className="flex items-center justify-center pt-6">
            <button
              onClick={() => setnumber(100)}
              className="flex bg-hover  items-center justify-center px-5 py-3 rounded-3xl text-sm text-main font-medium"
            >
              Xem top 100
            </button>
          </div>
        )}
      </div>
      <div className=" h-[550px] w-full relative mt-10">
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <img src={banner} alt="banner" className="object-contain w-full" />
        </div>
        <div className="absolute top-0 left-0 right-0 bg-banner1 bottom-0 ">
          <div className="flex flex-col p-10 gap-2">
            <h3 className=" text-4xl font-bold  text-main">
              Bảng Xếp Hạng Tuần
            </h3>
            <div className="flex gap-8">
              <div className="flex-1 bg-rank p-3 rounded-md  ">
                <div className="flex items-center gap-2 justify-center">
                  <h3
                    className="bg-gradient-to-r text-3xl font-bold bg-clip-text text-transparent from-[#ff9357] from-10% to-[#9100ff]"
                    // onClick={navigate(dataZingChart?.weekChart?.vn?.link?.split('.')[0])}
                  >
                    Việt Nam
                  </h3>
                  <span className="p-[2px] rounded-full bg-white  ">
                    <RiPlayMiniFill size={18} />
                  </span>
                </div>
                {dataZingChart?.weekChart?.vn?.items
                  ?.filter((i, index) => index <= 4)
                  ?.map((item, index) => (
                    <ItemSong
                      key={item.encodeId}
                      songData={item}
                      STT={index + 1}
                      Hidden
                      isshow
                    />
                  ))}
                <div className="flex items-center justify-center pt-6">
                  <button
                    onClick={() => {
                      setnumber(100)
                      navigate(dataZingChart?.weekChart?.vn?.link?.split('.')[0]);
                    }}
                    className="flex bg-hover border items-center justify-center px-5 py-3 rounded-3xl text-sm text-main font-medium"
                  >
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-rank p-3 rounded-md  ">
                <div className="flex items-center gap-2 justify-center ">
                  <h3
                    className="bg-gradient-to-r text-3xl font-bold bg-clip-text text-transparent from-[#ff9357] from-10% to-[#9100ff]"
                  >
                    US-UK
                  </h3>
                  <span className="p-[2px] rounded-full bg-white  ">
                    <RiPlayMiniFill size={18} />
                  </span>
                </div>
                {dataZingChart?.weekChart?.us?.items
                  ?.filter((i, index) => index <= 4)
                  ?.map((item, index) => (
                    <ItemSong
                      key={item.encodeId}
                      songData={item}
                      STT={index + 1}
                      Hidden
                      isshow
                    />
                  ))}
                <div className="flex items-center justify-center pt-6">
                  <button
                    onClick={() => {
                      setnumber(100);
                      navigate(dataZingChart?.weekChart?.us?.link?.split('.')[0]);

                    }}
                    className="flex bg-hover border items-center justify-center px-5 py-3 rounded-3xl text-sm text-main font-medium"
                  >
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-rank p-3 rounded-xl">
                <div className="flex items-center gap-2 justify-center">
                  <h3
                    className="bg-gradient-to-r text-3xl font-bold bg-clip-text text-transparent from-[#ff9357] from-10% to-[#9100ff]"
                    // onClick={navigate(dataZingChart?.weekChart?.vn?.link)}
                  >
                    K-Pop
                  </h3>
                  <span className="p-[2px] rounded-full bg-white  ">
                    <RiPlayMiniFill size={18} />
                  </span>
                </div>

                {dataZingChart?.weekChart?.korea?.items
                  ?.filter((i, index) => index <= 4)
                  ?.map((item, index) => (
                    <ItemSong
                      key={item.encodeId}
                      songData={item}
                      STT={index + 1}
                      Hidden
                      isshow
                    />
                  ))}
                <div className="flex items-center justify-center pt-6">
                  <button
                    onClick={() => {
                      setnumber(100)
                      navigate(dataZingChart?.weekChart?.korea?.link?.split('.')[0]);
                    }}
                    className="flex bg-hover border items-center justify-center px-5 py-3 rounded-3xl text-sm text-main font-medium"
                  >
                    Xem tất cả
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ZingChart);
