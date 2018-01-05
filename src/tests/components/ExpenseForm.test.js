import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

// Render expense form without data
test('should render expense form correctly without data', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// Render expense form with data
test('should render expense form with expense data',() => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

// Render error
test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();  
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

// Set description on input change
test('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('description')).toBe(value);
});

// Set note on text area change
test('should set note on textarea change', () => {
  const value = 'New Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value);
});

// Set amount for valid input
test('should set amount for valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
});


// Set amount for invalid input
test('should set amount for invalid input', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe('');
});

// Call onSubmit prop for valid form submission
test('Should Call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

// Set new date on date change
test('should set new date on date change', () => {
 const now = moment();
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('SingleDatePicker').prop('onDateChange')(now);
 expect(wrapper.state('createdAt')).toEqual(now);
});


// Set calendar focus on change
test('should set new date on date change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
 });
 