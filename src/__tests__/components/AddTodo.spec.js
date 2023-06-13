import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import AddTodo from '../../component/AddTodo';
import * as actions from '../../actions';

jest.mock('../../actions', () => ({
  addTodo: jest.fn(),
}));


describe('AddTodo Component',()=>{

it('should add a todo when the button is clicked', () => {
  render(
      <AddTodo/>
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
      <AddTodo/>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '' } });
  expect(inputElement).toBeDisabled;
});

it('should disable add button when input value is only whitespace', () => {
  render(
      <AddTodo/>
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '   ' } });
  expect(inputElement).toBeDisabled;
});

})