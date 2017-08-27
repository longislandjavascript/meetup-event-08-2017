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

it('should add the the contestants state when "Add" button is pressed', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ contestant: 'Bob' });

  const addButton = wrapper.find('#addBtn');
  addButton.simulate('click');

  expect(wrapper).toHaveState('contestants', ['Bob']);
});
