import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Msg from '.';

const renderer = new ShallowRenderer();

describe('Msg', function () {
  it('should render correctly', function () {
    ['success', 'error'].forEach(function (type) {
      const component = renderer.render(
        <Msg
          type={type}
        >
          <h1>Lorem ipsum</h1>
        </Msg>
      );

      expect(component).toMatchSnapshot();
    });
  });
});
