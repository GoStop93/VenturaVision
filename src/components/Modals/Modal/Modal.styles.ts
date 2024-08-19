import styled from 'styled-components';

import { Dialog as MUIDialog } from '@mui/material';
import { screenSizes } from '../../../styles/sizes';

export const Dialog = styled(MUIDialog)`
  div {
    @media screen and (max-width: ${screenSizes.md}) {
      padding: 15px 10px !important;
    }
  }
`;
