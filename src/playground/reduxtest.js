import {createStore} from 'redux'; 

///////////// Action Generators - Functions that generates and return actions ///////////////

// INCREMENT FUNCTION
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// DECREMENT FUNCTION
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

// SET FUNCTION
const setCount = ({count} ) => ({
  type: "SET",
  count
});

// RESET FUNCTION
const resetCount = () => ({
  type: "RESET"
});


/////////////// REDUCER ///////////////
// 1. Reducers are the pure functions i.e Output is determined by the input
// 2. It never change state or action
const countReducer = (state = {count: 0}, action) => {
  switch (action.type){
    case 'RESET':
      return {
        count: 0
      };
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.count
      }

    default:
      return state;
  }
};

/////////////// Creating Store from the reducer above ///////////////
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


//////////////////// ACTIONS //////////////////

// INCREMENT
store.dispatch(incrementCount({incrementBy:2}));

// DECREMENT
store.dispatch(decrementCount({decrementBy: 10}));

// RESET
store.dispatch(resetCount());

// SET
store.dispatch(setCount({count: 570}));

// it will break the further store function if put between the above 4 actions
unsubscribe();



