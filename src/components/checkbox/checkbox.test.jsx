import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Checkbox from '.';

const renderer = new ShallowRenderer();

describe('Checkbox', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Checkbox name="foo" id="foo">Foo</Checkbox>
    );

    expect(component).toMatchSnapshot();
  });
});
