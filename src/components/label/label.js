import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.textColor};
`;

export default Label;
