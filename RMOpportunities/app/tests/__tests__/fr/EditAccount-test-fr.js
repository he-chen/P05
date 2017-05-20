// __tests__/EditAccount-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import EditAccount from '../../../main/EditAccount';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <EditAccount />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
