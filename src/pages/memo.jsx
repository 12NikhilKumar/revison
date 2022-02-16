import React from 'react'
const Count = ()=>{
    return (
        <>Home</>
    )
}
export const Counter = ()=>{
    const [val,setVal] = React.useState(0);
    const start = ()=>{
        setVal((prev)=>prev+1);
    };
    return (
        <div>
            <div>{val}</div>
            <button onClick={start}>start</button>
        </div>
    )
}
const areEqual = (prev,next) =>{
    if(prev.status === next.status){
        return true;
    }
    return false;
}
export const MemoizedCount = React.memo(Count,areEqual)