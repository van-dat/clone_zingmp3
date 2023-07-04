import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArrSlider } from "../ultis/fn";
import * as actions from '../store/actions'
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-app");
    let sttStart = 0;
    let sttEnd = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(sttStart, sttEnd, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        //delete classname
        sliderEls[i].classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i].classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i].classList?.remove("animate-slide-left2", "order-2", "z-10");

        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`;
        } else {
          sliderEls[i].style.cssText = `display: none`;
        }
      }
      list.forEach((item) => {
        if (item === sttEnd) {
          sliderEls[item].classList.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === sttStart) {
          sliderEls[item].classList.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item].classList.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      sttStart =
        sttStart === sliderEls.length - 1 ? (sttStart = 0) : (sttStart += 1);
      sttEnd = sttEnd === sliderEls.length - 1 ? (sttEnd = 0) : (sttEnd += 1);
    }, 4000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.setCurSongId(item.encodeId))
      dispatch(actions.isPlay(true))
      dispatch(actions.playAlbum(null))

    }
    if(item?.type === 4) {
      const albumPath = item?.link?.split('.')[0]
      Navigate(albumPath)
      
    }else{
      dispatch(actions.playAlbum(null))
    }
  };
  return (
    <div className=" overflow-hidden w-full ">
      <div className="flex w-full gap-4 p-8 justify-center ">
        {banner?.map((item, index) => (
          <img
            src={item.banner}
            onClick={() => handleClickBanner(item)}
            className={`slider-app w-[32%] object-contain rounded-lg cursor-pointer ${
              index <= 2 ? "block" : "hidden"
            }`}
            alt="slider"
            key={item.encodeId}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
