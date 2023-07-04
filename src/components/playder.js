import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../api";
import icons from "../ultis/icon";
import * as actions from "../store/actions";
import moment from "moment";
import { toast } from "react-toastify";


var Interval
const Playder = () => {
  const {
    AiOutlineHeart,
    FiMoreHorizontal,
    PiRepeatThin,
    MdSkipPrevious,
    PiPlayCircleThin,
    MdSkipNext,
    PiShuffleThin,
    PiPauseCircleLight,
    PiRepeatOnceThin
  } = icons;
  const hover_bg = "p-[6px] rounded-[20px] hover:bg-hover cursor-pointer";
  const click_toger =  "p-[6px] rounded-[20px] text-play hover:bg-hover cursor-pointer";
  const dispatch = useDispatch();
  const { curSongId, isPlaying, songs } = useSelector((state) => state.music);
  const [songInfo, setsongInfo] = useState(null);
  const [audio, setaudio] = useState(new Audio());
  const [time, settime] = useState(0);
  const [shuffe, setshuffe] = useState(false);
  const [repeat, setrepeat] = useState(0);

  const thum = useRef();
  const trackBar = useRef();
  
  useEffect(() => {
    const fetchDataSong = async () => {
      const [result1, result2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      if (result1.data.err === 0) {
        setsongInfo(result1.data.data);
      }
      if (result2.data.err === 0) {
        audio.pause();
        audio.load()
        setaudio(new Audio(result2.data.data["128"]));
      }else {
        audio.pause();
        audio.load()
        setaudio(new Audio())
        settime(0)
        toast.warn(result2?.data.msg)
        thum.current.style.cssText = `right : 100%`;
        dispatch(actions.isPlay(false))
        handleClickNext()
      }
    };

    fetchDataSong();
  }, [curSongId]);

  useEffect(() => {
    Interval&& clearInterval(Interval)
    if (isPlaying && thum.current){
      audio.play();
      Interval= setInterval(() => {
        let percent =
          Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100;
          thum.current.style.cssText = `right : ${100 - percent}%`;
          settime(Math.round(audio.currentTime))
      }, 600);
    }
  }, [audio]);  


  useEffect(() => {
    const handlEnded = () => {
      console.log(repeat)
      if(shuffe) {
        handleClickShuffe()
      }
      else if(repeat) {
        console.log('a',repeat)
       repeat === 1 ? handleClickNext():handleRepeactone()
      }
      else {
      audio.pause();
      dispatch(actions.isPlay(false));
      }
    }
    audio.addEventListener('ended', handlEnded)
    return () => {
      audio.removeEventListener('ended', handlEnded)
    }
  }, [audio, repeat, shuffe]);



  const handleClickPlay = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(actions.isPlay(false));
    } else {
      audio.play();
      dispatch(actions.isPlay(true));
      
    }
  };

  const handleClickProcessBar = (e) => {
    const trackRect = trackBar.current.getBoundingClientRect()
    const percent = Math.round((e.clientX - trackRect.left)*10000 / trackRect.width) / 100
    thum.current.style.cssText = `right : ${100 - percent}%`;
    audio.currentTime = percent * songInfo.duration / 100
    settime(Math.round(percent * songInfo.duration / 100))
  }
  const handleClickPrevious = () => {
    if(songs) {
      let indexSong
      songs?.forEach((item, index) => {
        if(item.encodeId === curSongId) indexSong = index
      })
      dispatch(actions.setCurSongId(songs?.[indexSong+1].encodeId) )
      dispatch(actions.isPlay(true))
    }
  }
  const handleRepeactone = () => {
    audio.play()
  }
  const handleClickNext = () => {
      if(songs) {
        var indexSong
        songs?.forEach((item, index) => {
          if(item.encodeId === curSongId) indexSong = index
        })
        dispatch(actions.setCurSongId(songs?.[indexSong+1].encodeId) )
        dispatch(actions.isPlay(true))
      }
      // else{
      //   songs?.forEach((item, index) => {
      //     if(item.encodeId === curSongId) indexSong = index
      //   })
      //   dispatch(actions.setCurSongId(songs?.[indexSong+1].encodeId) )
      //   dispatch(actions.isPlay(false))
      // }

  }
  const handleClickShuffe = () => {
    const random = Math.round(Math.random() * songs.length )-1
    console.log(random)
    dispatch(actions.setCurSongId(songs?.[random].encodeId) )
    dispatch(actions.isPlay(true))
  }
  // const handleClickRepeat = () => {
  //   setrepeat(Prev => !Prev)
  // }
  return (
    <div className="px-5 flex h-full  ">
      <div className="w-[30%] flex-auto flex items-center gap-4">
        <img
          src={songInfo?.thumbnail}
          className="w-[64px] h-[64px] object-cover rounded-lg"
          alt={songInfo?.alias}
        />
        <div className="flex flex-col text-sm ">
          <span className="text-main font-semibold text-sm">
            {songInfo?.title}
          </span>
          <span className="text-main-100 text-xs">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex items-center">
          <span className={hover_bg}>
            <AiOutlineHeart size={16} color="#fff" />
          </span>
          <span className={hover_bg}>
            <FiMoreHorizontal size={16} color="#fff" />
          </span>
        </div>
      </div>
      {/* playing button */}
      <div className="w-[40%] flex flex-col justify-center items-center">
        <div className="text-[#fff] flex items-center gap-[10px]">
          <span onClick={()=> setshuffe(Prev =>!Prev)} className={`${shuffe ? `${click_toger}` : `${hover_bg}`}`}>
            <PiShuffleThin size={20} />
          </span>
          <span onClick={handleClickPrevious} className={`${songs ? `${hover_bg}` : 'text-main-100'}`}>
            <MdSkipPrevious size={20} />
          </span>
          <span
            className="p-[6px] rounded-[20px] hover:text-play cursor-pointer "
            onClick={handleClickPlay}
          >
            {isPlaying ? (
              <PiPauseCircleLight size={48} />
            ) : (
              <PiPlayCircleThin size={48} />
            )}
          </span>
          <span  onClick={handleClickNext} className={`${songs ? `${hover_bg}` : 'text-main-100'}`}>
            <MdSkipNext size={20} />
          </span>
          <span onClick={()=> setrepeat(Prev => Prev ===2 ? 0 : Prev + 1)}  className={`${repeat ? `${click_toger}` : `${hover_bg}`}`}>

            {repeat === 2 ?<PiRepeatOnceThin size={20} />:<PiRepeatThin size={20} />}
          </span>
        </div>
        <div className="w-full flex items-center rounded-l-full rounded-r-full justify-center gap-3 text-xs ">
          <span className="text-main-100">{moment.utc(time * 1000).format("mm:ss")}</span>
          <div ref={trackBar} onClick={handleClickProcessBar} className="w-3/4 h-[3px] relative bg-hover cursor-pointer rounded-full hover:h-[6px]">
            <div
              ref={thum}
              className="absolute left-0  rounded-full top-0 bottom-0 bg-white"
            ></div>
          </div>
          <span className="text-white">{moment.utc(songInfo?.duration * 1000).format("mm:ss")}</span>
        </div>
      </div>
      <div className="w-[30%] text-[10px]">Playder right</div>
    </div>
  );
};

export default Playder;
