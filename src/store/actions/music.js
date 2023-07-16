import actionType from "./acitonType";
import * as api from "../../api";

export const setCurSongId = (sid) => ({
  type: actionType.SET_CUR_SONG_ID,
  sid,
});

export const isPlay = (flag) => ({
  type: actionType.PLAY,
  flag,
});
export const acAlbum = (flag) => ({
  type: actionType.SET_ALBUM,
  flag,
});
export const playAlbum = (songs) => ({
  type: actionType.PLAYLIST_ALBUM,
  songs,
});
export const loading = (flag) => ({
  type: actionType.LOADING,
  flag,
});
export const setCurSongdata = (data) => ({
  type: actionType.SET_CUR_SONG_DATA,
  data,
});
export const setCurAlbumId = (pid) => ({
  type: actionType.SET_CUR_ALBUM_ID,
  pid,
});
export const setRecentSong = (data) => ({
  type: actionType.SET_RECENT_SONG,
  data,
});
export const setNewSong = (data) => ({
  type: actionType.SET_NEW_SONG,
  data,
});
export const setSearch = (keyword) => async (dispatch) => {
  try {
    const reponse = await api.apiSearch(keyword)
    if(reponse?.data?.err === 0) {
        dispatch({
            type:actionType.SEARCH,
            data:reponse?.data?.data
        })
    }else{
        dispatch({
            type:actionType.SEARCH,
            data:null
        })
    }
  } catch (error) {
    dispatch({
        type: actionType.SEARCH,
        data: null
    })
  }
};
