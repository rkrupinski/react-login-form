import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const Btn = styled.button`
  padding: 7px 10px;
  border: 1px solid white;
  border-radius: 5px;
  font: normal 1.25rem/1 'Roboto', sans-serif;
  color: white;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.primaryColor};
  transition: background .1s, box-shadow .1s;
  cursor: pointer;

  &:hover {
    ${({ theme }) => {
      const newColor = tinycolor(theme.primaryColor).darken(10).toString();

      return `
        box-shadow: 0 0 0 1px ${newColor};
        background: ${newColor};
      `;
    }}
  }

  &:active {
    ${({ theme }) => {
      const newColor = tinycolor(theme.primaryColor).darken(30).toString();

      return `
        box-shadow: 0 0 0 1px ${newColor};
        background: ${newColor};
      `;
    }}
  }
`;

export default Btn;
