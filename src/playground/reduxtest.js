import {createStore} from 'redux'; 

const store = createStore((state = {count: 0}, action) => {
  switch (action.type){
    case 'RESET':
      return {
        count: 0
      };
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    
    case 'DECREMENT':
      return {
        count: state.count -1 
      };

    default:
      return state;
  }
});

console.log(store.getState());

//////////////////// ACTIONS //////////////////
// INCREMENT
store.dispatch({
  type: 'INCREMENT'
});

// DECREMENT
store.dispatch({
  type: 'DECREMENT'
});

// RESET
store.dispatch({
  type: 'RESET'
});

console.log(store.getState());
