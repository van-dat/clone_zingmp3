import React, { memo, useEffect, useState } from "react";
import {  useSelector  } from "react-redux";
import { SectionItem } from "../../components";
import * as api from '../../api'

const SearchPlaylist = () => {
  const { searchData } = useSelector((state) => state.music);
  const [dataPlaylist, setdataPlaylist] = useState([]);


  useEffect(() => {
    const fetchData = async ()=>{
      const reponse = await api.apiArtist(searchData?.top?.alias)
      if(reponse?.data?.err === 0) {
        setdataPlaylist(reponse?.data?.data?.sections[1]?.items)
      }
    }

    fetchData()
  }, [searchData]);

  console.log(dataPlaylist)
  return (
    <div className="px-9 flex-col flex gap-4 text-main font-bold text-xl ">
      <span className="text-xl font-bold">Playlist/Album</span>
      <div className="py-5 flex flex-wrap ">
        <SectionItem
          data={dataPlaylist}
          Style="text-main text-sm font-bold hover:text-btn"
          number = {500}
        />
      </div>
    </div>
  );
};

export default memo(SearchPlaylist);
