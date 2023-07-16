import React, { memo } from "react";
import * as actions from "../store/actions";
import { useDispatch   } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import { BiTennisBall } from "react-icons/bi";

const Songs = ({
  thumbnail,
  artistsNames,
  releaseDate,
  title,
  encodeId,
  order,
  percent,
  btn,
  Song,
  time,
  Style
  
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full flex items-center p-2 text-white cursor-pointer hover:bg-hover rounded-md  ${
        BiTennisBall && "justify-between"
      }`}
      onClick={() => {
        btn && dispatch(actions.setCurSongId(encodeId));
        btn && dispatch(actions.isPlay(true));
        dispatch(actions.setRecentSong({thumbnail,title, artistsNames,encodeId}))

      }}
    >
      <div className="flex gap-3 items-center">
        {order && <span className={`${order === 1 ? 'text-shadow-1 text-stroke-1': order === 2 ? 'text-shadow-2 text-stroke-2': 'text-shadow-3 text-stroke-3' } text-transparent font-sans font-bold text-[32px]`}>{order}</span>}
        <img
          src={thumbnail}
          alt="thumbnail"
          className={Style || 'h-[55px] w-[55px] rounded-md object-contain'}
        />

        <div className="flex flex-col gap-1">
          {Song && <span className="text-xs text-main-100">{Song}</span>}
          <span className="text-sm font-medium">{`${
            title?.length > 25 ? `${title.slice(0, 20)}...` : `${title}`
          }`}</span>
          <span className="text-xs text-main-100">{`${
            artistsNames?.length > 25
              ? `${artistsNames.slice(0, 20)}...`
              : `${artistsNames}`
          }`}</span>
          {releaseDate && (
            <span className="text-xs text-main-100">
              {moment(releaseDate * 1000).fromNow()}
            </span>
          )}
        </div>
      </div>
      {percent && <span>{`${percent}%`}</span>}
      {time && <span>{moment.utc(time * 1000).format('mm:ss')}</span>}
    </div>
  );
};

export default memo(Songs);
