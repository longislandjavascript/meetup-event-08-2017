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

it("shouldn't add a contestant if the input is blank", () => {
  const wrapper = shallow(<App />);

  const addButton = wrapper.find('#addBtn');
  addButton.simulate('click');

  expect(wrapper).toHaveState('contestants', []);
});

it("shouldn't be able to add the same contestant twice", () => {
  const wrapper = shallow(<App />);
  const addButton = wrapper.find('#addBtn');

  wrapper.setState({ contestants: ['Bob'], contestant: 'Bob' });
  addButton.simulate('click');
  expect(wrapper).toHaveState('contestants', ['Bob']);

  wrapper.setState({ contestants: ['Bob'], contestant: 'bob' });
  addButton.simulate('click');
  expect(wrapper).toHaveState('contestants', ['Bob']);
});

it('should render all of the added contestant', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ contestants: ['Bob', 'Bill', 'Ben'] });
  wrapper.update();

  expect(wrapper.find('li')).toHaveLength(3);
});
