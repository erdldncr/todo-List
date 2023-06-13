import { ADD_TODO, FETCH_TODOS, REQUEST_FAILED, REQUEST_PENDING } from "../actions/types";

export default function(state = {isLoading:false, isError:false}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, data: action.payload, isLoading:false };
    case REQUEST_PENDING:
      return {...state,isLoading:true}
    case ADD_TODO:
      return {...state,data:action.payload, isLoading:false}  
    case REQUEST_FAILED:
      return {...state, isError:true,isLoading:false}
    default:
      return state;
  }
}