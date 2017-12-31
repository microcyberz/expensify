import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';


// SET START DATE
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// SET END DATE
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

// SET TEXT FILTER WITH ARGUMENTS
test('should generate set text filter object with arguments', () => {
  const action = setTextFilter('kaka');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'kaka'
  })
});

// SET TEXT FILTER WITHOUT ARGUMENTS
test('should generate set text filter object without arguments', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

// SORT BY DATE
test('should generate sort by date object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type:  'SORT_BY_DATE' })
});

// SORT BY AMOUNT
test('should generate sort by amount object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type:  'SORT_BY_AMOUNT' })
});

