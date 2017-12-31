import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Default state
test('should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  })
  expect(state).toEqual([]);
});


// Remove expense bu ID
test('should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

// Don't Remove expense if id is not found
test('should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


// add an expense
test('should add an expense', () => {
  const expense = {
    id: '199',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// edit an expense
test('should edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(122000);
});

// don't edit expense
test('should not edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});