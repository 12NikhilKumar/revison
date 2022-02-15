import React from "react";
export const Alarm = ()=>{
    // const [time,setTime] = React.useState(0);
    const [min,setMin] = React.useState(0);
    const [sec,setSec] = React.useState(0);
    const [time,setTime] = React.useState(null);
    const timeRef = React.useRef(null);
    const checkTime = () =>{
        console.log(sec)
        if(timeRef.current){
            return
        }
        timeRef.current = setInterval(()=>{
            setSec((sec)=>sec < 60?sec+1:sec=0);
        },100)
    }
    const pause = ()=>{
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    const reset = ()=>{
        clearInterval(timeRef.current);
        timeRef.current = null;
        setMin(0)
        setSec(0)
    }
    React.useEffect(()=>{
        if(sec==60){
            setMin((min)=>min+1)
        }
        if(time>0 && min==time){
            alert("wake up")
            setTime(null)
        }
    },[sec])
    return (
        <div>
            <div>{min}:{sec}</div>
            <input type="number" placeholder="enter your time" onChange={(e)=>{setTime(e.target.value)}}/>
            <button onClick={checkTime}>Start</button>
            <button onClick={pause}>pause</button>
            <button onClick={reset}>reset</button>
        </div>
    )
};