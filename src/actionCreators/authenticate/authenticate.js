import axios from 'axios';

import authSuccessful from 'actionCreators/authSuccessful';
import authError from 'actionCreators/authError';

export default function authenticate(email, password) {
  return dispatch => axios
      .post('/api/v1/auth', {
        email,
        password,
      })
      .then(() => dispatch(authSuccessful()))
      .catch(() => dispatch(authError()));
}
