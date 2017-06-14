import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.gutter};
`;

export default Row;
