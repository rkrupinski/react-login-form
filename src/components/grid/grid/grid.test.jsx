import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Grid from '.';

const renderer = new ShallowRenderer();

describe('Grid', function () {
  it('should render correctly', function () {
    const component = renderer.render(
      <Grid>
        <h1>Lorem ipsum</h1>
      </Grid>
    );

    expect(component).toMatchSnapshot();
  });
});
