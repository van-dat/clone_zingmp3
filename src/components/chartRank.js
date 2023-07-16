import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import icons from "../ultis/icon";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Songs } from "./";
import _ from "lodash";
import Path from "../ultis/path";
import { useNavigate, Link } from "react-router-dom";

const ChartRank = () => {
  const Navigate = useNavigate()
  const { chart, rank } = useSelector((state) => state.app);
  const { RiPlayMiniFill } = icons;
  const [data, setDataChart] = useState({ datasets: [] });
  const chartRep = useRef();
  const [selected, setselected] = useState(null);
  const [tooltipState, settooltipState] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  });
  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,

    scales: {
      y: {
        ticks: { display: false, stepSize: 6000 },
        grid: {
          drawTicks: false,
          color: "rgba(255,255,255,.2)",
        },
        min: chart?.minScore,
        max: chart?.maxScore,
        border: {
          dash: [3, 4],
        },
      },
      x: {
        ticks: { color: "#ffffff80" },
        grid: {
          color: "transparent",
        },
      },
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: ({ tooltip }) => {
          if (!chartRep || !chartRep.current) return;
          if (tooltip.opacity === 0) {
            if (tooltipState !== 0)
              settooltipState((prev) => ({ ...prev, opacity: 0 }));
            return;
          }
          const newDataTooltip = {
            opacity: 1,
            top: tooltip.caretY,
            left: tooltip.caretX,
          };
          const counters = [];
          for (let i = 0; i < 3; i++) {
            counters.push({
              data: chart?.items[Object.keys(chart?.items)[i]]
                ?.filter((item) => +item.hour % 2 === 0)
                ?.map((item) => item.counter),
              encodeId: Object.keys(chart?.items)[i],
            });
          }
          //lấy số lượng xem của bài hát khi hover vào 1 điểm
          // console.log(+tooltip.body[0].lines[0]?.replace('.', '') )

          // so sánh chúng với mảng counter đúng thi lấy về encodeiId
          const rs = counters?.find((item) =>
            item.data.some(
              (i) => i === +tooltip.body[0].lines[0]?.replace(".", "")
            )
          );
          setselected(rs.encodeId);
          // console.log(rs.encodeId)

          if (!_.isEqual(tooltipState, newDataTooltip))
            settooltipState(newDataTooltip);
        },
      },
    },
  };

  useEffect(() => {
    const dataChart = [];
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        dataChart.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor: i === 0 ? "#4a8ddf" : i === 1 ? "#27bc9c" : "#e35050",
          tension: 0.3,
          borderWidth: 1,
          pointBackgroundColor:
            i === 0 ? "#4a8ddf" : i === 1 ? "#27bc9c" : "#e35050",
          pointHoverRadius: 6,
          pointBorderColor: "white",
          pointHoverBorderWidth: 3,
        });
      }

      setDataChart({
        labels: chart?.times
          ?.filter((item) => +item.hour % 2 === 0)
          ?.map((item) => `${item.hour}:00`),
        datasets: dataChart,
      });
    }
  }, [chart]);
  return (
    <div className="flex p-9 relative h-[400px] max-h-[400px] rounded-md  ">
      <div className="absolute top-4 bottom-9 left-9 right-9 bg-chart-bg rounded-md "></div>
      <div className="absolute top-4 bottom-9 left-9 right-9 bg-chart p-3 rounded-md flex flex-col gap-5 ">
        {/* ZINGCHART */}
        <div className="flex items-center gap-2">
          <Link to={Path.ZINGCHART} >
          <h3 className="bg-gradient-to-r text-2xl font-bold bg-clip-text text-transparent from-[#ff9357] from-10% to-[#9100ff]">
            {rank?.title}
          </h3>
          </Link>
          <span className="p-[2px] rounded-full bg-white  ">
            <RiPlayMiniFill size={18} />
          </span>
        </div>
        <div className="flex gap-3">
          {/* TOP */}
          <div className="flex-4 flex flex-col w-full  gap-2 ">
            {rank?.items
              ?.filter((item, index) => index < 3)
              ?.map((item, index) => (
                <div
                  key={item.encodeId}
                  className="flex w-full rounded-md  bg-[#ffffff12] "
                >
                  <Songs
                    thumbnail={item.thumbnail}
                    title={item.title}
                    artistsNames={item.artistsNames}
                    encodeId={item.encodeId}
                    order={index + 1}
                    percent={Math.round((item.score / chart?.totalScore) * 100)}
                    btn
                  />
                </div>
              ))}

              <div className="flex justify-center items-center text-main  ">
                <span className=" border rounded-2xl px-4 py-1 cursor-pointer  " onClick={()=>Navigate(Path.ZINGCHART)}>Xem thêm</span>
              </div>
          </div>
          <div className="flex-6  h-[95%] w-full  text-xs relative  ">
            {data && <Line options={options} ref={chartRep} data={data} />}
            <div
              className="tooltip"
              style={{
                top: tooltipState.top - 80,
                left: tooltipState.left- 104,
                opacity: tooltipState.opacity,
                position: "absolute",
              }}
            >

              <div className={`flex bg-main rounded-lg w-[200px] relative`}>
                <Songs
                  thumbnail={
                    rank?.items?.find((i) => i.encodeId === selected)?.thumbnail
                  }
                  title={
                    rank?.items?.find((i) => i.encodeId === selected)?.title
                  }
                  artistsNames={
                    rank?.items?.find((i) => i.encodeId === selected)
                      ?.artistsNames
                  }
                  encodeId={
                    rank?.items?.find((i) => i.encodeId === selected)?.encodeId
                  }
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChartRank);
