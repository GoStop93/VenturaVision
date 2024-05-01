import styled from 'styled-components';

import { Typography } from '@mui/material';
import { colors } from '../../../../styles/colors';
import { screenSizes } from '../../../../styles/sizes';

export const Calculators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 40vh;
  padding: 0 48px;
  box-sizing: border-box;

  @media screen and (max-width: ${screenSizes.sm}) {
    height: auto;
    padding: 40px 20px;
  }
`;

export const Title = styled(Typography)`
  span {
    color: ${colors.orange};
  }
`;
