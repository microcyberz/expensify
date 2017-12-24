import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//////////////////// ACTIONS ////////////////////
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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


//////////////////// REDUCERS ////////////////////
//////////////////// Expenses Reducer ////////////////////
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({
        id
      }) => id !== action.id);


    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }else{
          return expense;
        }
      });

    default:
      return state;
  }
};
//////////////////// Filters Reducer ////////////////////
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type){
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };

    case 'SORT_BY_DATE':
    return{
      ...state,
      sortBy: 'date'
    };

    case 'SORT_BY_AMOUNT':
    return{
      ...state,
      sortBy: 'amount'
    };

    case 'SET_START_DATE':
    return{
      ...state,
      startDate: action.startDate
    }

    case 'SET_END_DATE':
    return{
      ...state,
      endDate: action.endDate
    }

    default:
      return state;
  }
};


//////////////////// GET VISIBLE EXPENSES ////////////////////
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    // console.log(expense);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//////////////////// STORE ////////////////////
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//////////////////// DISPATCH ACTIONS ////////////////////
// Dispatch ADD_EXPENSE 
const expenseOne = store.dispatch(addExpense({description: "rent", amount:100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: "coffee", amount:300, createdAt: 2000}));


// // Dispatch REMOVE_EXPENSE 
// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// // Dispatch EDIT_EXPENSE 
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// // DISPATCH SET_TEXT_FILTER
// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

// // DISPATCH SORT_BY_AMOUNT
store.dispatch(sortByAmount());

// // DISPATCH SORT_BY_DATE
// store.dispatch(sortByDate());

// console.log("=============");

// // DISPATCH SET_START_DATE
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// // DISPATCH SET_END_DATE
// store.dispatch(setEndDate(10001));


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
