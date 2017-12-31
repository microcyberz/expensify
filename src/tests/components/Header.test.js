import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();  
  // expect(wrapper.find('h1').length).toBe(1);
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
}); 