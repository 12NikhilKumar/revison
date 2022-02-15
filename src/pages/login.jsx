import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './carasol';
export const Login = ()=>{
    const history = useHistory();
    const [data,setData] = React.useState({
        "email":'',
        "password":''
    })
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const login = ()=>{
        var email = localStorage.getItem('email')
        var password = localStorage.getItem('password')
        if(email == data.email && password == data.password){
            alert(`login succes`)
            //  return <Redirect to="home"/>
            history.push('/home')
        }
        else{
            alert(`login failed`)
             history.push('/')
        }
    }
     return (
        <div>
            <input type="text" placeholder="email" name="email" value={data.email} onChange={handleChange}/>
            <input type="text" placeholder="password" name="password" value={data.password} onChange={handleChange}/>
            <button onClick={login}>Login</button>
        </div>
    )
}