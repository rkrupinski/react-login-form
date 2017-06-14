import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginForm from '.';

const mockStore = configureMockStore([ thunk ]);

describe('LoginForm', function () {
  it('should render correctly with no error', function () {
    const store = mockStore({ auth: { error: false } });

    const component = renderer.create(
      <LoginForm store={store} />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with auth error', function () {
    const store = mockStore({ auth: { error: true } });

    const component = renderer.create(
      <LoginForm store={store} />
    );

    expect(component).toMatchSnapshot();
  });
});
