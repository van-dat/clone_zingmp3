import actionType from "./acitonType";
 
export const setCurSongId = (sid) => ({
    type: actionType.SET_CUR_SONG_ID,
    sid
})

export const isPlay = (flag) => ({
    type: actionType.PLAY,
    flag
})
export const acAlbum = (flag) => ({
    type: actionType.SET_ALBUM,
    flag
})
export const playAlbum = (songs) => ({
    type: actionType.PLAYLIST_ALBUM,
    songs
})
export const loading = (flag) => ({
    type: actionType.LOADING,
    flag
})