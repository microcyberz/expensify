import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
////////// ACTIONS //////////
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

////////// REDUCERS //////////
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state, action.expense];
      break;
    
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      break;

    default:
      return state;
  }
};
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type){
    default:
      return state;
  }
};

////////// STORE //////////
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(()=>{
  console.log(store.getState());
});

////////// DISPATCH ACTIONS //////////
// Dispatch ADD_EXPENSE 
const expenseOne = store.dispatch(addExpense({description: "rent", amount:100}));
const expenseTwo = store.dispatch(addExpense({description: "coffee", amount:300}));

// Dispatch REMOVE_EXPENSE 
store.dispatch(removeExpense({id: expenseOne.expense.id}));


const demoState = {
  expenses: [{
    id: '01',
    description: 'January Rent',
    notes: 'This was final payment for the  address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};