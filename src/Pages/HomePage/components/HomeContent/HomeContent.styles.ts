import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const Video = styled.video<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  gap: 40px;
`;

export const Title = styled(Typography)`
  text-shadow: 3px 3px 3px ${colors.orange};

  @media screen and (max-width: ${screenSizes.sm}) {
    font-size: 40px !important;
  }
`;

export const Subtitle = styled(Typography)`
  text-shadow: 2px 2px 3px ${colors.white};

  @media screen and (max-width: ${screenSizes.sm}) {
    font-size: 30px !important;
    text-align: center;
  }
`;
