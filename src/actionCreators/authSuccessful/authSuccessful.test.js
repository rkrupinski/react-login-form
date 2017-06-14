import authSuccessful from '.';
import { AUTH_SUCCESSFUL } from '../../constants';

describe('authSuccessful', function () {
  it('should return a proper action object', function () {
    expect(authSuccessful()).toEqual({ type: AUTH_SUCCESSFUL, });
  });
});
