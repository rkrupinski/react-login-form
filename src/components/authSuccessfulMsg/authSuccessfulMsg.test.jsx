import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import AuthSuccessfulMsg from '.';

const renderer = new ShallowRenderer();

describe('AuthSuccessfulMsg', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <AuthSuccessfulMsg />
    );

    expect(component).toMatchSnapshot();
  });
});
