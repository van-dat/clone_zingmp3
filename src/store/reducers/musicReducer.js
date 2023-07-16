import actionType from "../actions/acitonType";

const initState = {
  curSongId: null,
  curSongData: null,
  isPlaying: false,
  alAlbum: false,
  songs: null,
  curAlbumId: null,
  recentSong: [],
  searchData : {}
};
const musicReduce = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sid || null,
      };
    case actionType.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionType.SET_ALBUM:
      return {
        ...state,
        alAlbum: action.flag,
      };
    case actionType.PLAYLIST_ALBUM:
      return {
        ...state,
        songs: action.songs || null,
      };
    case actionType.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null,
      };
    case actionType.SET_CUR_ALBUM_ID:
      return {
        ...state,
        curAlbumId: action.pid || null,
      };
    case actionType.SET_RECENT_SONG:
      let song = state.recentSong;
      if (action.data) {  
        if(song?.some(item => item.encodeId === action.data.encodeId)){
            song= song?.filter((item) => item.encodeId !== action.data.encodeId)
        }
        if (song.length > 20) {
          song = song?.filter((i, index, self) => index !== self.length - 1)
        }
        song = [action.data, ...song]
      }
      return {
        ...state,
        recentSong: song
      };
      case actionType.SEARCH:
      return {
        ...state,
        searchData: action.data || {},
      };
    default:
      return state;
  }
};
export default musicReduce;
