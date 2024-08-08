import { ReactElement } from 'react';
import { DocumentProps } from '@react-pdf/renderer';

export interface IPDFDownloadButtonProps {
  children: ReactElement<DocumentProps>;
  fileName: string;
}