import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import styled from 'styled-components';
import { connect } from 'react-redux';

import validator from 'components/validator';
import ValidatorOutlet from 'components/validatorOutlet';
import Label from 'components/label';
import Input from 'components/input';
import Checkbox from 'components/checkbox';
import Msg from 'components/msg';
import Btn from 'components/btn';
import authenticate from 'actionCreators/authenticate';
import { Row, Col } from 'components/grid';
import { mq } from 'utils';

const SpacedCol = styled(Col)`
  margin-bottom: 1.25em;

  ${({ theme }) => mq(theme.bpSmall, 'margin-bottom: 0;')}
`;

const SpacedRow = styled(Row)`
  ${({ theme }) => mq(theme.bpSmall, `
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  `)}
`;

const SubmitContainer = styled(Col)`
  text-align: right;
`;

const LoginForm = ({
  onSubmit,
  onChange,
  submitted,
  fields,
  authError,
}) => (
  <form
    onSubmit={onSubmit}
    noValidate
  >
    {authError && <Msg type="error">Invalid email or password</Msg>}

    <SpacedRow>
      <SpacedCol sm={6}>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
        />
        {submitted && !fields.email.valid &&
        <ValidatorOutlet>Invalid email</ValidatorOutlet>}
      </SpacedCol>
      <SpacedCol sm={6}>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={onChange}
        />
        {submitted && !fields.password.valid &&
        <ValidatorOutlet>Invalid password</ValidatorOutlet>}
      </SpacedCol>
    </SpacedRow>
    <SpacedRow>
      <SubmitContainer>
        <Checkbox name="remember" id="remember">Remember me</Checkbox>

        <Btn type="submit">Log in</Btn>
      </SubmitContainer>
    </SpacedRow>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  fields: PropTypes.objectOf(PropTypes.shape({
    valid: PropTypes.bool,
    value: PropTypes.any,
  })).isRequired,
  authError: PropTypes.bool.isRequired,
};

export default compose(
  connect(
    ({ auth: { error: authError } }) => ({ authError }),
    dispatch => ({
      validCallback(fields) {
        const { email, password } = fields;

        dispatch(authenticate(email.value, password.value));
      },
    }),
  ),
  validator(['email', 'password']),
)(LoginForm);
