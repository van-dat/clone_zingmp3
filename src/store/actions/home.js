import actionType from "./acitonType";
import * as apis from '../../api'
export const getHome = () => async (dispath) =>{
    try {
        const response = await apis.getHome();
        if (response?.data.err ===0 ) {
            dispath({
                type: actionType.GET_HOME,
                homeData :response.data.data.items
            })
        }else {
            dispath({
                type: actionType.GET_HOME,
                homeData :null
            })
        }
    } catch (error) {
        dispath({
            type: actionType.GET_HOME,
            homeData :null
        })
    }
}