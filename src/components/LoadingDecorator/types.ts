import { CircularProgressProps } from '@mui/material';

export interface ILoadingDecoratorProps<D> extends CircularProgressProps {
  data: D;
  loading: boolean;
  children: (data: D) => React.ReactNode;
  padding?: string;
}
