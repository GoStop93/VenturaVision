import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const CalculationMethodology = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 0;
  gap: 20px;
  max-width: 800px;

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
  font-size: 16px !important;
  strong {
    color: ${colors.orange};
  }
`;

export const List = styled.ul`
  ::marker {
    color: ${colors.orange};
  }
`;

export const Summary = styled.div`
  padding: 20px 0;
  border-top: 1px dashed ${colors.orange};
  border-bottom: 1px dashed ${colors.orange};
`;

export const SubText = styled.span`
  font-size: 12px; 
  vertical-align: sub; 
  margin-left: 2px; 
`;