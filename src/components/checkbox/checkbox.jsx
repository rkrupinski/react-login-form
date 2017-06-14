import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.label`
  display: inline-block;
  padding-left: 20px;
  margin-right: ${({ theme }) => theme.gutter};
  position: relative;
  color: ${({ theme }) => theme.textColor};

  & > :first-child {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Checkbox = ({ children, ...otherProps }) => (
  <Container htmlFor={otherProps.name}>
    <input {...otherProps} type="checkbox" />
    {children}
  </Container>
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Checkbox;
