import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const Switcher = styled.div`
  display: flex;
  gap: 5px;
`;

export const SwitchOption = styled(Typography)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.orange : colors.white)};
  &:hover {
    cursor: pointer;
    color: ${colors.orange};
  }
`;
