import React from 'react';
import renderer from 'react-test-renderer';
import ButtonCalculator from './ButtonCalculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonCalculator className="four" name="4" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
