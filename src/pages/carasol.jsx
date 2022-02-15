import React from "react";
import axios from "axios";
import { Appcontext } from "../contextapi/context";
function UseFetch(url){
    const {handleData} = React.useContext(Appcontext);
    const [img,setData] = React.useState(null);
    React.useEffect(()=>{
        const config = {
            method: "GET",
            url: url,
        }
        axios(config)
        .then((res)=>{
            setData(res.data)
        })
    })
    handleData(img)
}
const Home = ()=>{
    // const {data} = UseFetch();
    UseFetch('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
    const {data} = React.useContext(Appcontext);
    console.log({data})
    const [index,setIndex] = React.useState(1);
    const tog = ()=>{
        setIndex((prev)=>prev+1)
    }
    return (
        <>
        {data?
            (<div>
            <img src={data[index].urls.regular}/>
            <button onClick={tog}>next</button>
            </div>)
        :(<div>loding</div>)}
        </>
    )
}
export default Home