import HelpIcon from '@mui/icons-material/Help';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const QuestionIcon = styled(HelpIcon)<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || '18px'} !important;
  color: ${colors.orange};
  &:hover {
    cursor: pointer;
  }
`;

export const QuestionIconButton = styled(IconButton)`
  padding: 0 !important;
`;
