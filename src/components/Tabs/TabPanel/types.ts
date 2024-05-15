import { SxProps, Theme } from '@mui/material';

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  unmountOnExit?: boolean;
  sx?: SxProps<Theme>;
}
