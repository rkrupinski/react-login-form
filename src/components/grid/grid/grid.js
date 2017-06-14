import styled from 'styled-components';
import { mq } from 'utils';

const Grid = styled.div`
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.gutter};
  margin: 0 auto;

  ${({ theme }) => ['Small', 'Medium', 'Large'].map(bp => mq(
    theme[`bp${bp}`],
    `width: ${theme[`w${bp}`]};`,
  )).join('\n')}
`;

export default Grid;
