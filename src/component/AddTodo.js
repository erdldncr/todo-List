import React, { useState } from 'react';
import {addTodo} from "../actions";
function AddTodo() {
  const [todo,setTodo]=useState('')
  return (
    <div className='addTodo'>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text"/>
      <button disabled={!todo.trim()} onClick={()=>{
        addTodo(todo)
        setTodo('')
      }}>Add Todo</button>
    </div>
  );
}
export default AddTodo