// __tests__/FAQ-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import FAQ from '../../../main/FAQ';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <FAQ />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
