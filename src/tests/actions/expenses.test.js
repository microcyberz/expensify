import {
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';


// FOR REMOVE EXPENSE
test('should setup remove expense action object', () => {
  const action = removeExpense({
    id: 'abc123'
  });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

// FOR EDIT EXPENSE
test('should setup editExpense action object', () => {
  const action = editExpense('myId', {
    note: 'this is a note'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'myId',
    updates: {
      note: 'this is a note'
    }
  });
});

// FOR ADD EXPENSE (with provided values)
test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

// FOR ADD EXPENSE (with default values)
test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});