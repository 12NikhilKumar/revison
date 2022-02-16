import axios from 'axios';
export const actionTypes = {
    GET_RQUESTS: 'GET_RQUESTS',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_REJECT: 'GET_REJECT',
}
export const getRequest = ()=>({
    type: actionTypes.GET_RQUESTS,
    payload : {
        isLoding : true
    }
})
export const getSuccess = (res)=>({
    type: actionTypes.GET_SUCCESS,
    payload : {
        isLoding : false,
        data : res
    }
})
export const getReject = (err)=>({
    type: actionTypes.GET_REJECT,
    payload : {
        isLoding : false,
        data : err
    }
})
export const getData = (config)=>(dipatch)=>{
    dipatch(getRequest)
    axios(config)
    .then((res)=>{
        dipatch(getSuccess(res.data))
    })
    .catch((err)=>{
        dipatch(getReject(err))
    })
}
