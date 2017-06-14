import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LoginScreen from '.';

const renderer = new ShallowRenderer();

describe('LoginScreen', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <LoginScreen />
    );

    expect(component).toMatchSnapshot();
  });
});
