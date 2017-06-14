import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mq, cols } from 'utils';

const Col = styled.div`
  width: 100%;
  flex: none;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.gutter};

  ${({ theme, sm }) => sm && mq(
    theme.bpSmall,
    `width: ${cols(sm, theme.cols)};`,
  )}

  ${({ theme, smOffset }) => smOffset && mq(
    theme.bpSmall,
    `margin-left: ${cols(smOffset, theme.cols)};`,
  )}

  ${({ theme, md }) => md && mq(
    theme.bpMedium,
    `width: ${cols(md, theme.cols)};`,
  )}

  ${({ theme, mdOffset }) => mdOffset && mq(
    theme.bpMedium,
    `margin-left: ${cols(mdOffset, theme.cols)};`,
  )}

  ${({ theme, lg }) => lg && mq(
    theme.bpLarge,
    `width: ${cols(lg, theme.cols)};`,
  )}

  ${({ theme, lgOffset }) => lgOffset && mq(
    theme.bpLarge,
    `margin-left: ${cols(lgOffset, theme.cols)};`,
  )}
`;

Col.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
};

export default Col;
