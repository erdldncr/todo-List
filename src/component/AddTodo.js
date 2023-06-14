import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo} from "../actions";
function AddTodo() {
const dispatch =useDispatch()
  const [todo,setTodo]=useState('')
  const {isLoading} =useSelector(state=>state)

  return (
    <div className='addTodo'>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text"/>
      <button disabled={!todo.trim() || isLoading} onClick={()=>{
        dispatch(addTodo(todo))
        setTodo('')
      }}>Add Todo</button>
    </div>
  );
}
export default AddTodo