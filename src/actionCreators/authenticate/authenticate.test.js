import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import authenticate from '.';
import { AUTH_ERROR, AUTH_SUCCESSFUL } from '../../constants';

const mockStore = configureMockStore([ thunk ]);

let store;

describe('authenticate', function () {
  beforeEach(function () {
    moxios.install()
    store = mockStore({});
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('should dispatch proper actions for correct credentials', function (done) {
    moxios.stubRequest('/api/v1/auth', {
      status: 200
    });

    store.dispatch(authenticate('foo', 'bar'))
        .then(function () {
          expect(store.getActions()).toEqual([
            { type: AUTH_SUCCESSFUL },
          ]);

          done();
        });
  });

  it('should dispatch proper actions for incorrect credentials', function (done) {
    moxios.stubRequest('/api/v1/auth', {
      status: 400
    });

    store.dispatch(authenticate('foo', 'bar'))
        .then(function () {
          expect(store.getActions()).toEqual([
            { type: AUTH_ERROR },
          ]);

          done();
        });
  });
});
