import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../theme';

const base = `
  color: ${PRIMARY};
  font-weight: 500;
  font-size: 1.5rem;
`;

const Netflix = styled.span`
  ${base}
  font-family: Segoe UI Black;
`;

const Roulette = styled.span`
  ${base}
  font-family: Segoe UI Light;
`;

const Logo = () => (
  <>
    <Netflix>netflix</Netflix>
    <Roulette>roulette</Roulette>
  </>
);

export default Logo;
