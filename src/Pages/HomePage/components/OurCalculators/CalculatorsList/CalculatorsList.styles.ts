import styled from 'styled-components';

import { screenSizes } from '@/styles/sizes';

export const CalculatorsList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${screenSizes.lg}) {
    justify-content: center; 
    gap: 10px;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    flex-direction: column;
    gap: 50px;
  }
`;
