import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ValidatorOutlet from '.';

const renderer = new ShallowRenderer();

describe('ValidatorOutlet', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <ValidatorOutlet>Lorem ipsum</ValidatorOutlet>
    );

    expect(component).toMatchSnapshot();
  });
});
