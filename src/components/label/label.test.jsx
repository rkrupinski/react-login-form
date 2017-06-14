import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Label from '.';

const renderer = new ShallowRenderer();

describe('Label', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Label
        htmlFor="foo"
      >
        Lorem ipsum
      </Label>
    );

    expect(component).toMatchSnapshot();
  });
});
