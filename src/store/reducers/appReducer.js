import { acAlbum } from "../actions";
import actionType from "../actions/acitonType";


const initState = {
    banner : [],
    daily : {},
    chill : {},
    artist : {},
    isLoading: false,
    newRelease:{},
    weekChart : {},
    AlbumHot:{},
    rank : {},
    chart : {},
    isScroll: true

}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME :
            
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === "hSlider")?.items || null ,
                daily: action.homeData?.find(item => item.sectionId === "hEditorTheme2")|| {} ,
                chill: action.homeData?.find(item => item.sectionId === "hEditorTheme")|| {} ,
                artist: action.homeData?.find(item => item.sectionId === "hEditorTheme3")|| {} ,
                newRelease: action.homeData?.find(item => item.sectionType === "new-release")|| {} ,
                weekChart: action.homeData?.find(item => item.sectionType === "weekChart")?.items|| {} ,
                AlbumHot: action.homeData?.find(item => item.sectionId === "hAlbum")|| {} ,
                rank: {...action.homeData?.find(item => item.sectionId === "hZC"), title:'#zingchart'}|| {} ,
                chart: action.homeData?.find(item => item.sectionId === "hZC")?.chart|| {} ,

            };
        case actionType.LOADING :
            return {
                ...state,
                isLoading : action.flag
            };
        case actionType.SCROLL:
            return {
                ...state,
                isScroll : action.flag
            }
    
        default:
            return state;
    }
}
export default appReducer