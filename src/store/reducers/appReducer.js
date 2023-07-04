import actionType from "../actions/acitonType";


const initState = {
    banner : [],
    daily : {},
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME :
            
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === "hSlider")?.items || null ,
                daily: action.homeData?.find(item => item.sectionId === "hEditorTheme2")|| {} 
            };
    
        default:
            return state;
    }
}
export default appReducer