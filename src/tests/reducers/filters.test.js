import moment from 'moment';
import filterReducer from '../../reducers/filters';


// Default filter
  test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
      text: '',
      sortBy:'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    });
  });

  // Default filter
  test('should set sortBby to Amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
  });


  // Sort by date
  test('should set sortBy to date', () => {
     const currentState = {
       text: '',
       startDate: undefined,
       endData: undefined,
       sortBy: 'amount'

     }; 
     const action = {type: 'SORT_BY_DATE'};
     const state = filterReducer(currentState, action);
     expect(state.sortBy).toBe('date');
  });

  // Set text filter
  test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
      type: 'SET_TEXT_FILTER',
      text
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('This is my filter');
  });


  // Set StartDate
  test('should set start date filter', () => {
    const startDate = moment();
    const action = {
      type: 'SET_START_DATE',
      startDate
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
  });

  
  // Set EndDate
  test('should set start date filter', () => {
    const endDate = moment();
    const action = {
      type: 'SET_END_DATE',
      endDate
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
  });