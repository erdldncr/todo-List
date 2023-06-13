
let todoList = {
  todos: [],
};

const addTodo=(todo)=>{
  todoList={
    ...todoList,
    todos:[...todoList.todos,todo]
  }
  return Promise.resolve(todoList)
}
module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo:(todo) =>addTodo(todo)
};