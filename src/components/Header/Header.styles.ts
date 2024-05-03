import styled from 'styled-components';
import { IconButton } from '@mui/material';

import { screenSizes } from '../../styles/sizes';

export const Header = styled.div<{ isTransparentBackground: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ isTransparentBackground }) => (isTransparentBackground ? 'transparent' : 'rgba(0, 0, 0, 0.7)')};
  height: 64px;
  width: 100%;
  padding: 0 20px;
  z-index: 10;
  transition: background-color 2s;
`;

export const MenuButton = styled(IconButton)`
  @media screen and (min-width: ${screenSizes.sm}) {
    display: none !important;
  }
`;
