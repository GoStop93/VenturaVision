import styled from 'styled-components';
import { Typography } from '@mui/material';

import { colors } from '../../../../styles/colors';

export const CalculationMethodology = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 5vw 0;
  gap: 20px;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px !important;
  span {
    color: ${colors.orange};
  }
`;

export const Text = styled(Typography)`
  strong {
    color: ${colors.orange};
  }
`;

export const List = styled.ul`
  ::marker {
    color:  ${colors.orange};
  }
`;
