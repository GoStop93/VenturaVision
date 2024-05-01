import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../styles/colors';

export const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${colors.orange};
  transform-origin: bottom;
  z-index: 100;
`;

export const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${colors.orange};
  transform-origin: top;
  z-index: 100;
`;
