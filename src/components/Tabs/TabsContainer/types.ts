import { TabsProps } from '@mui/material';

export interface ITabsContainerProps extends Omit<TabsProps, 'onChange'> {
  value: number;
  children?: React.ReactNode;
  onChange: (newValue: number) => void;
}
