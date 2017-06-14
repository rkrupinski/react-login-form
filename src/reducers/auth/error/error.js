import { AUTH_ERROR } from '../../../constants';

export default function error(state = false, action) {
  const { type } = action;

  switch (type) {
    case AUTH_ERROR:
      return true;
    default:
      return state;
  }
}
