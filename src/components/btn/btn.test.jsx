import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Btn from '.';

const renderer = new ShallowRenderer();

describe('Btn', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Btn type="submit">Lorem ipsum</Btn>
    );

    expect(component).toMatchSnapshot();
  });
});
