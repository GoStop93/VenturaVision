import styled from 'styled-components';
import { Typography } from '@mui/material';

import { colors } from '../../../../../../../styles/colors';

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

export const Subtitle = styled(Typography)`
  margin-top: 20px !important;
  span {
    color: ${colors.orange};
  }
`;

export const Text = styled(Typography)`
  margin-top: 10px !important;
  font-size: 18px !important;
  span {
    color: ${colors.orange};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
