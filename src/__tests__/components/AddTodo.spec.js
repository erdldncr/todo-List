import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import AddTodo from '../../component/AddTodo';
import * as actions from '../../actions';
import { Provider } from 'react-redux';

jest.mock('../../actions', () => ({
  addTodo: jest.fn(),
}));
const store = {
    getState: () => ({}),
    subscribe: () => {},
    dispatch: () => {},
  };


describe('AddTodo Component',()=>{

it('should add a todo when the button is clicked', () => {
  render(
     <Provider store={store}>
        <AddTodo/>
     </Provider>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'Test todo' } });
  const buttonElement = screen.getByText('Add Todo');
  fireEvent.click(buttonElement);

  expect(actions.addTodo).toHaveBeenCalledTimes(1);
  expect(actions.addTodo).toHaveBeenCalledWith('Test todo');
  expect(inputElement.value).toBe('');

});
it('should disable add button when input is empty', () => {
  render(
      <Provider store={store}>
        <AddTodo/>
     </Provider>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '' } });

  expect(inputElement).toBeDisabled;
});

it('should disable add button when input value is only whitespace', () => {
  render(
      <Provider store={{...store,}}>
        <AddTodo/>
     </Provider>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '   ' } });
  expect(inputElement).toBeDisabled;
});



it('should disable add button when input isLoading is true and input has value', () => {
  const testStore={...store,getState:() => ({isLoading:true})}
  render(
      <Provider store={testStore}>
        <AddTodo/>
     </Provider>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement).toBeDisabled;
});

})