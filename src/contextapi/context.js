import React from 'react';
export const Appcontext = React.createContext();
export const AppcontextProvider = ({children})=>{
    const [data,setData] = React.useState(null);
    const handleData = (data)=>{
        setData(data);
    }
    const value = {data,handleData};
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}