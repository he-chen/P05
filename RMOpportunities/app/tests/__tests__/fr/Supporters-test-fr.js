// __tests__/Supporters-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Supporters from '../../../main/Supporters';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Supporters />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
