import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginFormContainer from '.';

const mockStore = configureMockStore([ thunk ]);

describe('LoginFormContainer', function () {
  it('handle the unauthenticated case correctly', function () {
    const store = mockStore({ auth: { authenticated: false }});

    const component = renderer.create(
      <LoginFormContainer store={store} title="foo">
        <h1>Lorem ipsum</h1>
      </LoginFormContainer>
    );

    expect(component).toMatchSnapshot();
  });

  it('handle the authenticated case correctly', function () {
    const store = mockStore({ auth: { authenticated: true }});

    const component = renderer.create(
      <LoginFormContainer store={store} title="foo">
        <h1>Lorem ipsum</h1>
      </LoginFormContainer>
    );

    expect(component).toMatchSnapshot();
  });
});
