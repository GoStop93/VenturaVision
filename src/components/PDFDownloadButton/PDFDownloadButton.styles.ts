import styled from 'styled-components';

import { PDFIcon } from '@/icons';

import Button from '../Button';

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
