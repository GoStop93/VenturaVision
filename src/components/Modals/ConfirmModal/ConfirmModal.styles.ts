import styled from 'styled-components';

import { Box } from '@mui/material';
import Button from '../../Button';

export const IconBox = styled(Box)`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 20px;
`;

export const OutlinedButton = styled(Button)`
  div {
    z-index: 2 !important;
  }
  &:after {
    z-index: 1 !important;
  }
`;
