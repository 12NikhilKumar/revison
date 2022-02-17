import styles from './tictaktoe.module.css';
import React from 'react';
var arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
export const TickTok = ()=>{
    const [tog,setTog] = React.useState(0);
    // function check(){
    //     for(var i=0;i<arr.length;i++){  
    //         if(arr[i][0]==arr[i][1] && arr[i][1]==arr[i][2]){
    //         return true;
    //         }
    //         if(arr[i])
    //     }
    // }
    const handleClick = (e)=>{
        console.log(e.target.parentNode)
        tog?arr[e.target.parentNode.className][e.target.className]=1:arr[e.target.parentNode.className][e.target.className]=0
        setTog(!tog);
    }
    return (
        <>
            <table onClick={handleClick}>
                <tr className="0">
                    <td className="0">{arr[0][0]}</td><td className="1">{arr[0][1]}</td><td className="2">{arr[0][2]}</td>
                </tr>
                <tr className="1">
                    <td className="0">{arr[1][0]}</td><td className="1">{arr[1][1]}</td><td className="2">{arr[1][2]}</td>
                </tr>
                <tr className="2">
                    <td className="0">{arr[2][0]}</td><td className="1">{arr[2][1]}</td><td className="2">{arr[2][2]}</td>
                </tr>
            </table>
        </>
    )
};