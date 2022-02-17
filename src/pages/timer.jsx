import React from 'react';
export const Timer = ()=>{
    const [sec,setSec] = React.useState(0);
    const [min,setMin] = React.useState(null);
    const minRef = React.useRef(null);
    const start = ()=>{
        if(minRef.current){
            return
        }
        else if(min==0){
            return
        }
        else{
            minRef.current = setInterval(()=>{
                setSec((prev)=>prev<60 && min!=0?prev+1:prev=0)
            },100)
        }
    };
    const pause = ()=>{
        clearInterval(minRef.current)
    }
    React.useEffect(()=>{
        if(min == 0){
            pause()
        }
        if(sec==60){
            setMin((prev)=>prev-1);
        }
    },[sec])
    return (
        <>
            <div>{min}:{sec}</div>
            <input type="number" placeholder="etner your timr" value={min} onChange={(e)=>{setMin(e.target.value)}}/>
            <button onClick={start}>start</button>
        </>
    )
}