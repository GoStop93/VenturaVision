import styled from 'styled-components';

import { screenSizes } from '../../../../../styles/sizes';
import Button from '../../../../../components/Button';
import { Typography } from '@mui/material';

export const CalculatorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  gap: 20px;

  @media screen and (max-width: ${screenSizes.sm}) {
    width: auto;
  }
`;

export const CalculatorButton = styled(Button)`
  @media screen and (max-width: ${screenSizes.xl}) {
    height: 50px;
  }

  @media screen and (max-width: ${screenSizes.md}) {
    font-size: 12px !important;
    height: 70px;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    height: auto;
  }
`;

export const Description = styled(Typography)`
  @media screen and (max-width: ${screenSizes.lg}) {
    font-size: 12px !important;
  }
`;
