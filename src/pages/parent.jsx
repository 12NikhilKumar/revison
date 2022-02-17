import React from 'react';
export const Todo = ()=>{
    const [todo,setTodo] = React.useState(null);
    const onAdd = (data) => {
        setTodo(data);
        console.log(data)
    }
    return (
        <TodoInput onSubmit={onAdd}/> 
    )
}
const TodoInput = ({onSubmit})=>{
    const [data,setData] = React.useState(null);
    const handleSubmit = ()=>{
        onSubmit(data);
    }
    return (
        <div>
            <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} placeholder="name"/>
            <button onClick={handleSubmit}>add to list</button>
        </div>
    )
}