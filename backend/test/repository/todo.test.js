
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: []
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

    it('should return the todo list with new todo', async () => {
    const expected = {task:'test',id:'1'}
    const actual = await repository.addTodo({task:'test',id:'1'});
    expect(actual.todos).toContainEqual(expected)
  });
});