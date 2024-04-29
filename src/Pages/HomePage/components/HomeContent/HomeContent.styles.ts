import styled from 'styled-components';
import { Box } from '@mui/material';

export const Content = styled(Box)`
  width: 100%;
  height: 80vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const Video = styled.video<{isActive: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
