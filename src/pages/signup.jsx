import React from "react"
export const SignUp = ()=>{
    const [data,setData] = React.useState({
        "email":"",
        "password":""
    })
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = ()=>{
        localStorage.setItem("email",data.email)
        localStorage.setItem("password",data.password)
    }
    return (
        <div>
            <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="emai"/>
            <input type="text" name="password" value={data.password} onChange={handleChange} placeholder="password"/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}