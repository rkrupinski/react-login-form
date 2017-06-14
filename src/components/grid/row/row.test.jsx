import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Row from '.';

const renderer = new ShallowRenderer();

describe('Row', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Row>
        <h1>Lorem ipsum</h1>
      </Row>
    );

    expect(component).toMatchSnapshot();
  });
});
