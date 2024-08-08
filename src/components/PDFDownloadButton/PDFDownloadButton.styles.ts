import styled from 'styled-components';

import Button from '../Button';
import { PDFIcon } from '../../icons';

export const PDFButton = styled(Button)`
  width: fit-content;
  gap: 5px;
  border-radius: 10px !important;
  &:after {
    border-radius: 5px;
  }
`;

export const Icon = styled(PDFIcon)`
  width: 30px !important;
  height: 30px !important;
`;
