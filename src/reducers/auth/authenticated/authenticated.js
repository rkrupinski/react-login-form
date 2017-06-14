import { AUTH_SUCCESSFUL } from '../../../constants';

export default function authenticated(state = false, action) {
  const { type } = action;

  switch (type) {
    case AUTH_SUCCESSFUL:
      return true;
    default:
      return state;
  }
}
