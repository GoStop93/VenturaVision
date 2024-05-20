import styled from 'styled-components';
import { Typography } from '@mui/material';

import { colors } from '../../../../styles/colors';
import { screenSizes } from '../../../../styles/sizes';

export const CalculationMethodology = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 0;
  gap: 20px;
  @media screen and (max-width: ${screenSizes.sm}) {
    ol,
    ul {
      padding: 0 15px;
    }
  }
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
    color: ${colors.orange};
  }
`;
