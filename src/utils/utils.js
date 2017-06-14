import { css } from 'styled-components';

export const identity = val => val;

export const mq = (bp, rules) =>
  `@media (min-width: ${bp}) { ${css`${rules}`} }`;

export const cols = (num, outOf) =>
    `calc((100% - 0.1px) / ${outOf} * ${num});`;
