import styled from 'styled-components';

import { screenSizes } from '@/styles/sizes';

export const VentilationCalculator = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 96px 42px 32px 42px;

  @media screen and (max-width: ${screenSizes.sm}) {
    padding: 96px 20px 32px 20px;
  }
`;
