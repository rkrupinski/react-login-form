import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Input from '.';

const renderer = new ShallowRenderer();

describe('Input', function () {
  it('should render correctly', function () {
    ['email', 'password'].forEach(type => {
      const component = renderer.render(
        <Input type={type} name={type} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
