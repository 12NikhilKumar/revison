import { actionTypes } from "./action"

const initState = {
    isLoading: false,
    data: [],
}
export const reducer = (state=initState,action)=>{
    switch(action.type){
        case actionTypes.GET_RQUESTS : {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionTypes.GET_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                data : action.payload.data
            }
        }
        case actionTypes.GET_REJECT : {
            return {
                ...state,
                isLoading: false,
                data : action.payload.data
            }
        }
        default : {
            return state
        }
    }
}