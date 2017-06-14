import authError from '.';
import { AUTH_ERROR } from '../../constants';

describe('authError', function () {
  it('should return a proper action object', function () {
    expect(authError()).toEqual({ type: AUTH_ERROR });
  });
});
