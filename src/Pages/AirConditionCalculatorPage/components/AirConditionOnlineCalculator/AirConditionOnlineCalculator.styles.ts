import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const AirConditionOnlineCalculator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 0;
  gap: 40px;
`;

export const Title = styled(Typography)`
  span {
    color: ${colors.orange};
  }
`;
