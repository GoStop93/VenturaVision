import { DialogProps } from '@mui/material';

export interface IModalProps extends Omit<DialogProps, 'open'> {
  close: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}
