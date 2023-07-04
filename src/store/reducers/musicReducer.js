import actionType from "../actions/acitonType";


const initState = {
    curSongId : null,
    isPlaying:false,
    alAlbum:false,
    songs : null
}
const musicReduce = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_SONG_ID :
        return {
            ...state,
            curSongId: action.sid || null
        }
        case actionType.PLAY :
        return {
            ...state,
            isPlaying: action.flag 
        }
        case actionType.SET_ALBUM :
        return {
            ...state,
            alAlbum: action.flag 
        }
        case actionType.PLAYLIST_ALBUM :
        return {
            ...state,
            songs: action.songs || null 
        }
        default:
            return state;
    }
}
export default musicReduce