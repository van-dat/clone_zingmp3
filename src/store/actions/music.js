import actionType from "./acitonType";
 
export const setCurSongId = (sid) => ({
    type: actionType.SET_CUR_SONG_ID,
    sid
})

export const isPlay = (flag) => ({
    type: actionType.PLAY,
    flag
})