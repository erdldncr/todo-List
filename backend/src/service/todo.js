const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
       addTodo: async (data) => {
      return await repository.addTodo(data)
    }
  };
};

module.exports = todoService;