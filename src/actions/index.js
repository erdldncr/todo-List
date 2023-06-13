import axios from "axios";
import { FETCH_TODOS, REQUEST_FAILED, REQUEST_PENDING } from "./types";

export function fetchTodos() {
  return function(dispatch) {
        dispatch({type:REQUEST_PENDING})
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    }).catch((err)=>{
     dispatch({type:REQUEST_FAILED})
      console.error(err);
    });
  };
}

export function addTodo(todo) {
  return function(dispatch) {
    dispatch({type:REQUEST_PENDING})
    return axios.post("http://localhost:9091/api/todo",{task:todo,id: new Date().getTime()}).then(({ data }) => {
      dispatch(setTodos(data));
    }).catch((err)=>{
     dispatch({type:REQUEST_FAILED})
      console.error(err);
    })
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

