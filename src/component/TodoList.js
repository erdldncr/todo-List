import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {data:{todos},isLoading,isError} = this.props;
    if(isLoading){
      return <p>Loading....</p>
    }
    if(isError){
      return <p>Something is wrong</p>
    }
    return (<ul className="todo-list">
      {todos && todos.length
        ? todos.map(({task,id}) => {
          return <Todo key={`todo-${id}`} todo={task}/>;
        })
        : "No todos, yay!"}
    </ul>);
  }
}

const mapStateToProps = ({data = {}, isLoading = false, isError}) => ({
  data,
  isLoading,
  isError
});
export default connect(
  mapStateToProps,
  {
    fetchTodos
  }
)(TodoList);