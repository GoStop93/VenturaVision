import MUICheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

import Button from '../Button';

export const DropdownButton = styled(Button)`
  text-decoration: none !important;
  gap: 4px;
  min-width: auto;
`;

export const ArrowIcon = styled(KeyboardArrowDownIcon)<{ anchorElDropdown: null | HTMLElement }>`
  width: 16px;
  height: 16px;
  color: ${colors.orange};
  transform: ${({ anchorElDropdown }) => (anchorElDropdown ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 7px;
`;

export const CheckIcon = styled(MUICheckIcon)`
  width: 10px !important;
  color: ${colors.white};
`;
