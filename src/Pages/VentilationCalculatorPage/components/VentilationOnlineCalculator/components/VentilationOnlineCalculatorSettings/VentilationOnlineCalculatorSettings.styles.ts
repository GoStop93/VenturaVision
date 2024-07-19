import styled from 'styled-components';
import { Typography } from '@mui/material';

import { colors } from '../../../../../../styles/colors';

export const Settings = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid ${colors.orange};
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Forms = styled.div`
  display: flex;
  gap: 50px;
`;

export const SettingsTitle = styled(Typography)<{ width?: string }>`
  max-width: ${({ width }) => (width ? width : 'auto')};
`;
