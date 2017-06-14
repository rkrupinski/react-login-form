import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Root from '.';

const renderer = new ShallowRenderer();

describe('Root', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Root />
    );

    expect(component).toMatchSnapshot();
  });
});
