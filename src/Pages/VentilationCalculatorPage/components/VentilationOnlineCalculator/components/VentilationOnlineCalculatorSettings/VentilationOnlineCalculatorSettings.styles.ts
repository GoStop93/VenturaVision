import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const Settings = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid ${colors.orange};

  @media screen and (max-width: ${screenSizes.lg}) {
    flex-direction: column;
  }
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Forms = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: ${screenSizes.md}) {
    flex-direction: column;
  }
`;

export const SettingsTitle = styled(Typography)<{ width?: string }>`
  max-width: ${({ width }) => (width ? width : 'auto')};

  @media screen and (max-width: ${screenSizes.md}) {
    width: auto !important;
  }
`;
