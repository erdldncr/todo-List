import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import TodoList from '../../component/TodoList';

jest.mock('../../actions', () => ({
  fetchTodos: jest.fn(),
}));

describe('TodoList', () => {

  test('should display loading message when isLoading is true', async () => {
 const store = {
    getState: () => ({
      data: {},
      isLoading: true,
      isError: false,
    }),
    subscribe: () => {},
    dispatch: () => {},
  };

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText('Loading....')).toBeTruthy();
  });

  test('should display error message when isError is true', async () => {
     const store = {
    getState: () => ({
  data: {},
      isLoading: false,
      isError: true,
    }),
    subscribe: () => {},
    dispatch: () => {},
  };
   

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText('Something is wrong')).toBeTruthy();
  });

  test('should display todos when data has todos', async () => {
    const todos = [
      { id: '1', task: 'Task 1' },
      { id: '2', task: 'Task 2' },
    ];
  const store = {
    getState: () => ({
      data: {todos},
      isLoading: false,
      isError: false,
    }),
    subscribe: () => {},
    dispatch: () => {},
  };


    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    await waitFor(() => {
    todos.forEach(({ task }) => {
      expect(screen.queryByText(task)).toBeTruthy();
    });
    expect(screen.queryByText('No todos, yay!')).toBeFalsy();
  });
  });

  test('should display "No todos, yay!" when data has no todos', async () => {
       const store = {
    getState: () => ({
  data: {todos:[]},
      isLoading: false,
      isError: false,
    }),
    subscribe: () => {},
    dispatch: () => {},
  };

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText('No todos, yay!')).toBeTruthy();
  });
});
