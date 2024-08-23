import { Box, DialogActions as MUIDialogActions } from '@mui/material';
import styled from 'styled-components';

import Button from '@/components/Button';

import { screenSizes } from '@/styles/sizes';

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

  @media screen and (max-width: ${screenSizes.md}) {
    margin: 0 !important;
    padding: 7px 15px !important;
    div {
      padding: 0 !important;
    }
  }
`;

export const DialogActions = styled(MUIDialogActions)`
  @media screen and (max-width: ${screenSizes.md}) {
    flex-direction: column;
    gap: 10px;
  }
`;
