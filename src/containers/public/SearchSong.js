import React, { memo, useEffect } from "react";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { ListSong } from "../../components";

const SearchSong = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log('c',searchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setArtistSong(searchData?.top?.id));
  }, [searchData]);
  return (
    <div className="px-9">
      <ListSong
        isHidden = {true}
        style = 'overflow-hidden flex flex-col'
      /> 
    </div>
  );
};

export default memo(SearchSong);
