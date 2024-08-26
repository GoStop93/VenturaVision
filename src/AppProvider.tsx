import { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { flowRight } from 'lodash';

import ErrorBoundaryProvider from './components/ErrorBoundaryProvider';
import Layout from './layout/Layout';
import theme from './theme/theme';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
  return flowRight([
    (n) => <ThemeProvider theme={theme} children={n} />,
    (n) => <ErrorBoundaryProvider children={n}/>,
    (n) => <Layout children={n} />,
  ])(children);
};

export default AppProvider;
