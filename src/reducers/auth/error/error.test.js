import error from '.';
import { AUTH_ERROR } from '../../../constants';

describe('error reducer', function () {
  it('should have a valid default value', function () {
    expect(error(undefined, { type: 'NO_SUCH_ACTION' })).toEqual(false);
  });

  it('should return the state unchanged for unknown actions', function () {
    expect(error(44, { type: 'NO_SUCH_ACTION' })).toEqual(44);
  });

  it(`should alter the state upon ${AUTH_ERROR}`, function () {
    expect(error(false, { type: AUTH_ERROR })).toEqual(true);
  });
});
