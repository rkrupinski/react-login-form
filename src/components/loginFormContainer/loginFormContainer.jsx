import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { identity, mq } from 'utils';
import AuthSuccessfulMsg from 'components/authSuccessfulMsg';

const Container = styled.div`
  padding: ${({ theme }) => theme.gutter};
  margin: 1em 0;
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2),
              0 0 0 1px ${({ theme }) => theme.primaryColor} inset;

  ${({ theme }) => mq(theme.bpSmall, 'margin: 2em 0;')}
`;

const Heading = styled.h1`
  margin: 0 0 .5em;
  overflow: hidden;
  font: normal 2rem 'Monoton', cursive;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.headingColor};

  > span {
    padding: 0 ${({ theme }) => theme.gutter};
    position: relative;

    &::before,
    &::after {
      content: "";
      width: 99999px;
      height: 1px;
      position: absolute;
      top: calc(50% - 2px);
      ${({ theme }) => `
        border-top: 1px solid ${theme.headingColor};
        border-bottom: 1px solid ${theme.headingColor};
      `}
    }

    &::before {
      right: 100%;
    }

    &::after {
      left: 100%;
    }
  }
`;

const LoginFormContainer = ({ children, title }) => (
  <Container>
    <Heading>
      <span>{title}</span>
    </Heading>
    {children}
  </Container>
);

LoginFormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default compose(
  connect(
    ({ auth: { authenticated } }) => ({ authenticated }),
  ),
  branch(
    ({ authenticated }) => authenticated,
    renderComponent(AuthSuccessfulMsg),
    identity,
  ),
)(LoginFormContainer);
