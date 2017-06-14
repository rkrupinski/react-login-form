import { AUTH_ERROR } from '../../constants';

export default function authError() {
  return {
    type: AUTH_ERROR,
  };
}
