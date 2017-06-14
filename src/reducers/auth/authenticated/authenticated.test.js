import authenticated from '.';
import { AUTH_SUCCESSFUL } from '../../../constants';

describe('authenticated reducer', function () {
  it('should have a valid default value', function () {
    expect(authenticated(undefined, { type: 'NO_SUCH_ACTION' })).toEqual(false);
  });

  it('should return the state unchanged for unknown actions', function () {
    expect(authenticated(44, { type: 'NO_SUCH_ACTION' })).toEqual(44);
  });

  it(`should alter the state upon ${AUTH_SUCCESSFUL}`, function () {
    expect(authenticated(false, { type: AUTH_SUCCESSFUL })).toEqual(true);
  });
});
