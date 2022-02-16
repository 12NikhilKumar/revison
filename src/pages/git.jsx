import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getData } from "../redux/action";
const List = (item)=>{
    // console.log(data)
    return (
        <div>
            <div>1</div>
            <img src={item.urls.regular}/>
        </div>
    )
}
export const Git = ()=>{
    const dipatch = useDispatch();
    const data = useSelector((state)=>state.data)
    const isLoading = useSelector((state)=>state.isLoading);
    const config = {
        method : "GET",
        url:'https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'
    }
    React.useEffect(()=>{
        dipatch(getData(config))
    },[dipatch])
    return (
        <>
        <div>home</div>
            {isLoading && <div>Loading</div>}
            {data?data.map((item)=>(
                List(item)
            )):<div>err</div>}
        </>
    )
}