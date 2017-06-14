import styled, { keyframes } from 'styled-components';
import tinycolor from 'tinycolor2';

const slide = keyframes`
  from { transform: translateX(10px); opacity: 0; }
  to { transform: none; opacity: 1; }
`;

const ValidatorOutlet = styled.span`
  display: inline-block;
  padding: 1px 5px;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.errorColor};
  border-radius: 5px;
  position: relative;
  color: ${({ theme }) => theme.errorColor};
  background-color: ${({ theme }) => tinycolor.mix(theme.errorColor, 'white', 75).toString()};
  animation: ${slide} .5s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  &::before {
    top: -7px;
    border-bottom: 7px solid ${({ theme }) => theme.errorColor};
  }

  &::after {
    top: -6px;
    border-bottom: 7px solid ${({ theme }) => tinycolor.mix(theme.errorColor, 'white', 75).toString()};
  }
`;

export default ValidatorOutlet;
