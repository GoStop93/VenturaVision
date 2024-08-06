import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SlideIn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #c1c1c1;
  transform-origin: bottom;
  z-index: 100;
`;

export const SlideOut = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #c1c1c1;
  transform-origin: top;
  z-index: 100;
`;
