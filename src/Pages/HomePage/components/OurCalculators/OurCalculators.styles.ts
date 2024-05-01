import styled from 'styled-components';

import { Typography } from '@mui/material';
import { colors } from '../../../../styles/colors';

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
`;

export const Title = styled(Typography)`
  span {
    color: ${colors.orange};
  }
`;
