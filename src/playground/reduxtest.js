import {createStore} from 'redux'; 
console.log(typeof 5);
const store = createStore((state = {count: 0}, action) => {
  switch (action.type){
    case 'RESET':
      return {
        count: 0
      };
    case 'INCREMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
      return {
        count: state.count + incrementBy
      };
    
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };

    case 'SET':
      return {
        count: action.count
      }

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//////////////////// ACTIONS //////////////////
// INCREMENT
store.dispatch({
  type: 'INCREMENT',
  incrementBy: '5'
});

// RESET
store.dispatch({
  type: 'RESET'
});

// DECREMENT
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 40
});

// SET
store.dispatch({
  type: 'SET',
  count: 400
});





