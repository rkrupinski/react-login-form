import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import matches from 'validator/lib/matches';

const validators = {
  email: email => !isEmpty(email) && isEmail(email),

  password: password =>
      !isEmpty(password) &&
      isLength(password, { min: 6 }) &&
      matches(password, /[a-z]/) &&
      matches(password, /[A-Z]/) &&
      matches(password, /\d/),
};

export default validators;
