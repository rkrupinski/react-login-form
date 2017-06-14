import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Col from '.';

const renderer = new ShallowRenderer();

describe('Col', function () {
  it('should render correctly without props', function () {
    const component = renderer.render(
      <Col>
        <h1>Lorem ipsum</h1>
      </Col>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', function () {
    const component = renderer.render(
      <Col
        sm={12}
        md={6}
        mdOffset={6}
      >
        <h1>Lorem ipsum</h1>
      </Col>
    );

    expect(component).toMatchSnapshot();
  });
});
