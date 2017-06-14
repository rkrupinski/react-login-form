import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import tinycolor from 'tinycolor2';

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.p`
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  margin: 1em 0;
  animation: ${appear} .5s;

  ${({ theme, type }) => {
    const color = theme[`${type}Color`];

    return `
      padding: ${theme.gutter};
      color: ${color};
      border-color: ${color};
      background-color: ${tinycolor.mix(color, 'white', 75).toString()};
    `;
  }}
`;

const Msg = ({ type, children }) => (
  <Container type={type}>
    {children}
  </Container>
);

Msg.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Msg;
