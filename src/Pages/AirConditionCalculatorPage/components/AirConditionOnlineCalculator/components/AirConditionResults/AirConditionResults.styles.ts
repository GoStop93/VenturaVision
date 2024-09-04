import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 100px 0 40px;
`;

export const Label = styled(Typography)`
  span {
    color: ${colors.orange};
  }
`;
