import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  display: block;
  width: calc(100% - 18px);
  padding: 5px 8px;
  border: 1px solid white;
  border-radius: 5px;
  font: 14px/1.618 'Roboto', sans-serif;
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.primaryColor},
              0 0 0 1px ${({ theme }) => theme.primaryColor} inset;
`;

export default Input;
