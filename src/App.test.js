/* global it */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update contestant state when text is inputted', () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('input');
  input.simulate('change', 'Bob');

  expect(wrapper).toHaveState('contestant', 'Bob');
});
