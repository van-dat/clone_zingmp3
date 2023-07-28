import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArrSlider } from "../ultis/fn";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icon";
const { MdKeyboardArrowRight, MdKeyboardArrowLeft } = icons;
var intervalId;

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [sttStart, setsttStart] = useState(0);
  const [sttEnd, setsttEnd] = useState(2);
  const [isAuto, setisAuto] = useState(true); 

  useEffect(() => {
    if (isAuto) {
      intervalId = setInterval(() => {
        handleSlider(1);
      }, 4500);
    }

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [sttEnd,sttStart, isAuto ]);

  const handleSlider = (step) => {
    const sliderEls = document.getElementsByClassName("slider-app");
    const list = getArrSlider(sttStart, sttEnd, sliderEls.length - 1);
    // console.log(list);
    for (let i = 0; i < sliderEls.length; i++) {
      //delete classname
      sliderEls[i].classList?.remove("animate-slide-right", "order-last");
      sliderEls[i].classList?.remove("animate-slide-left", "order-first");
      sliderEls[i].classList?.remove("animate-slide-left2", "order-2");

      if (list.some((item) => item === i)) {
        sliderEls[i].style.cssText = `display: block`;
      } else {
        sliderEls[i].style.cssText = `display: none`;
      }
    }
    list?.forEach((item) => {
      if (item === sttEnd) {
        sliderEls[item].classList.add("animate-slide-right", "order-last");
      } else if (item === sttStart) {
        sliderEls[item]?.classList.add("animate-slide-left", "order-first");
      } else {
        sliderEls[item]?.classList.add("animate-slide-left2", "order-2");
      }
    });

    if(step === 1 ) {
      setsttStart((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
      setsttEnd((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
    }
    if(step === -1) {
      setsttStart((prev) => (prev === 0 ? sliderEls.length - 1  : prev + step));
      setsttEnd((prev) => (prev === 0 ? sliderEls.length - 1  : prev + step));
    }
    
  };

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.setCurSongId(item.encodeId));
      dispatch(actions.isPlay(true));
      dispatch(actions.playAlbum(null));
    }
    if (item?.type === 4) {
      const albumPath = item?.link?.split(".")[0];
      Navigate(albumPath);
    } else {
      dispatch(actions.playAlbum(null));
    }
  };

  const handleNextSlide = useCallback((step) => {
    intervalId && clearInterval(intervalId);
    setisAuto(false)
    handleSlider(step)
  }, [sttEnd,sttStart]);
  const handleBackSlide = useCallback((step) => {
    intervalId && clearInterval(intervalId);
    setisAuto(false)
    handleSlider(step)
  }, [sttEnd,sttStart]);
  return (
    <div  className=" overflow-hidden w-full ">
      <div onMouseLeave={()=> setisAuto(true) } className="flex w-full gap-4 p-8 justify-center relative group ">
        <button
          onClick={()=>handleNextSlide(1)}
          type="btn"
          className="absolute top-[42%] text-main left-[45px] z-10 p-2 rounded-full bg-[rgba(255,255,255,0.2)]  hidden group-hover:block"
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <button
          onClick={()=>handleBackSlide(-1)}
          type="btn"
          className="absolute top-[42%] text-main right-[45px] z-10 p-2 rounded-full bg-[rgba(255,255,255,0.2)] hidden   group-hover:block"
        >
          <MdKeyboardArrowRight size={30} />
        </button>

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
